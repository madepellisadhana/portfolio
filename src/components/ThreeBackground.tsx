import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);
  // --- FIX: Store the base camera position
  const baseCameraPosRef = useRef(new THREE.Vector3(0, 7, 12));
  // --- FIX: Store the base lookAt position
  const baseLookAtPosRef = useRef(new THREE.Vector3(0, 2.5, 0)); // Centered on rings

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // Use the base position for initialization
    camera.position.copy(baseCameraPosRef.current);
    camera.lookAt(baseLookAtPosRef.current);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    clockRef.current = new THREE.Clock();

    // Create perspective grid
    const gridSize = 80;
    const gridDivisions = 40;
    const gridColor = new THREE.Color(0x00ffff);

    const gridHelper = new THREE.GridHelper(
      gridSize,
      gridDivisions,
      gridColor,
      gridColor
    );
    (gridHelper.material as THREE.Material).opacity = 0.3;
    (gridHelper.material as THREE.Material).transparent = true;
    gridHelper.position.y = 0;
    gridHelper.position.z = 0;
    scene.add(gridHelper);

    // ---------------------------
    //  STATIC SPIRAL RINGS
    // ---------------------------
    const spiralGroup = new THREE.Group();
    const ringCount = 5;
    const topRadius = 5;
    const bottomRadius = 2;
    const ringThickness = 0.05;
    const totalHeight = 5;

    const spiralMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide,
    });

    for (let i = 0; i < ringCount; i++) {
      const t = i / (ringCount - 1);
      const radius = topRadius + (bottomRadius - topRadius) * t;

      const ringGeo = new THREE.RingGeometry(
        radius - ringThickness,
        radius + ringThickness,
        64
      );
      const ring = new THREE.Mesh(ringGeo, spiralMaterial);

      ring.rotation.x = -Math.PI / 2;
      const y = (1 - t) * totalHeight - totalHeight / 2;
      ring.position.y = y;

      spiralGroup.add(ring);
    }

    spiralGroup.position.y = totalHeight / 2 + 0.5; // (5/2 + 0.5) = 3
    scene.add(spiralGroup);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!clockRef.current || !rendererRef.current || !cameraRef.current)
        return;

      const elapsedTime = clockRef.current.getElapsedTime();

      // --- Grid Animation ---
      const yAmplitude = 1;
      const ySpeed = 0.5;
      const zAmplitude = 0.75;
      const zSpeed = 0.5;

      const yOscillation = Math.sin(elapsedTime * ySpeed);
      const zOscillation = Math.cos(elapsedTime * zSpeed);

      // Apply to grid position
      gridHelper.position.y = yOscillation * yAmplitude + yAmplitude;
      gridHelper.position.z = zOscillation * zAmplitude;

      // --- FIX: Animate Camera View Angle ---
      const camYAmount = 0.5; // How much camera moves up/down
      const camZAmount = 1;   // How much camera moves front/back
      const lookYAmount = 0.25; // How much target moves up/down
      const lookZAmount = 0.5;  // How much target moves front/back

      const newCamY =
        baseCameraPosRef.current.y + yOscillation * camYAmount;
      const newCamZ =
        baseCameraPosRef.current.z + zOscillation * camZAmount;

      const newLookY =
        baseLookAtPosRef.current.y + yOscillation * lookYAmount;
      const newLookZ =
        baseLookAtPosRef.current.z + zOscillation * lookZAmount;

      // Apply new positions
      cameraRef.current.position.y = newCamY;
      cameraRef.current.position.z = newCamZ;
      cameraRef.current.lookAt(
        baseLookAtPosRef.current.x, // look at x=0
        newLookY,
        newLookZ
      );

      // Render the scene
      rendererRef.current.render(scene, cameraRef.current);
    };

    animate(); // Start the animation loop

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId); // Stop animation
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};