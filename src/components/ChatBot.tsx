"use client";
import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const sendToWhatsapp = () => {
    if (!input.trim()) return;

    const phone = "14376694366"; // WhatsApp Number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(input)}`;
    window.open(url, "_blank");
    setInput("");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        aria-label="Open WhatsApp Chat"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-[#02F9FF] p-4 rounded-full shadow-[0_0_20px_#02F9FF] hover:shadow-[0_0_35px_#02F9FF] transition-all z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="whatsapp"
          className="w-7 h-7"
        />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-[#0B0F17] rounded-xl shadow-[0_0_25px_rgba(2,249,255,0.4)] border border-[#02F9FF]/40 p-4 flex flex-col z-50 transform transition-transform duration-300 ease-out">
          <h3 className="font-semibold text-[#02F9FF] mb-2 text-lg">
            Chat with Me on WhatsApp
          </h3>

          {/* Message Area */}
          <div className="flex-1 mb-3 h-28 border border-[#02F9FF]/30 rounded-lg p-3 text-gray-300 text-sm overflow-y-auto">
            Type your message and I’ll reply directly on WhatsApp ⚡
          </div>

          {/* Input */}
          <div className="flex">
            <input
              className="flex-1 border border-[#02F9FF]/40 bg-transparent text-white rounded-l-lg p-2 text-sm outline-none"
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendToWhatsapp()}
            />
            <button
              onClick={sendToWhatsapp}
              className="bg-[#02F9FF] hover:bg-[#04cbd4] text-black font-semibold px-4 rounded-r-lg transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
