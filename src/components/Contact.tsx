"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Sparkles } from "lucide-react";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_wwcvieq",    // Your Service ID
        "template_86wqweu",   // Your Template ID
        formRef.current,      // Form reference
        "KZX8uRxUG6iuMhjHS"   // Your Public Key
      )
      .then(
        (result) => {
          console.log("EmailJS success:", result.text);
          setStatus("success");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Elements to match theme */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* 🔹 HEADER: Updated to match 'My AI & Tech Universe' & 'Experience' style */}
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[4px] text-cyan-400 font-light mb-2">
            GET IN TOUCH
          </p>
          <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl relative inline-block">
            Contact Me
            <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-transparent w-full" />
          </h2>
          <p className="text-xl text-neutral-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE INFO */}
          <div className="space-y-6">
            <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="font-serif text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                {/* Email Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800/80 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors duration-300">
                    <Mail className="text-cyan-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Email</p>
                    <a
                      href="mailto:madepellisadhana@gmail.com"
                      className="text-lg text-white font-medium hover:text-cyan-400 transition-colors"
                    >
                      madepellisadhana@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800/80 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors duration-300">
                    <MapPin className="text-purple-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Location</p>
                    <p className="text-lg text-white font-medium">Ontario, Canada</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-neutral-800">
                <p className="text-sm text-neutral-400 leading-relaxed">
                  I am currently available for freelance projects and open to full-time opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
            <form className="space-y-5" ref={formRef} onSubmit={sendEmail}>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="your@email.com"
                  required
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full min-h-[140px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* 🔹 BUTTON: Updated to match Footer 'Subscribe' style */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center justify-center gap-2 text-green-400 bg-green-400/10 py-3 rounded-xl border border-green-400/20">
                  <Sparkles size={16} />
                  <span className="text-sm font-medium">Message sent successfully!</span>
                </div>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center mt-2 bg-red-400/10 py-2 rounded-xl">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};