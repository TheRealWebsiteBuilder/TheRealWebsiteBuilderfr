import React from 'react';
import { Mail, ArrowRight, Instagram, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex flex-col justify-center items-center text-center py-24 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">I Build Websites That Sell</h1>
        <p className="text-lg text-gray-400 max-w-xl mb-6">
          From brand pages to online stores — clean, modern, and optimized to convert.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white text-md px-6 py-3 rounded-full flex items-center">
          <Mail className="w-4 h-4 mr-2" /> Book a Free Discovery Call
        </button>
      </header>

      <section className="bg-zinc-900 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">What I Offer</h2>
        <div className="grid gap-10 md:grid-cols-3 text-center">
          <div>
            <img src="https://images.unsplash.com/photo-1581090700227-1e8e01dc58f4?auto=format&fit=crop&w=600&q=80" className="rounded-lg mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Landing Pages</h3>
            <p className="text-gray-400">High-converting, mobile-friendly sites for brands, launches, and portfolios.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d4?auto=format&fit=crop&w=600&q=80" className="rounded-lg mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">E-commerce Stores</h3>
            <p className="text-gray-400">Custom online shops with payment integration and product management.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1545235617-9465d2f9bb14?auto=format&fit=crop&w=600&q=80" className="rounded-lg mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Full Site Packages</h3>
            <p className="text-gray-400">Complete design + dev with hosting, email capture, and admin dashboard options.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Recent Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map(id => (
            <img key={id} src={`https://source.unsplash.com/random/500x400?web,project,${id}`} className="rounded-lg shadow-md" />
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 text-center py-16 px-4">
        <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Want a site that actually makes money? I’ll build it. You launch it.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-md rounded-full flex items-center mx-auto">
          <ArrowRight className="w-4 h-4 mr-2" /> Get In Touch
        </button>
      </section>

      <footer className="bg-black border-t border-zinc-800 py-8 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-4 mb-2">
          <a href="#"><Instagram className="inline w-5 h-5" /></a>
          <a href="#"><Globe className="inline w-5 h-5" /></a>
          <a href="mailto:therealwebsitebuilder@gmail.com"><Mail className="inline w-5 h-5" /></a>
        </div>
        © 2025 therealwebsitebuilder. Built by You.
      </footer>
    </div>
  );
}

export default App;
