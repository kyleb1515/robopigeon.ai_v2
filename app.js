import React from 'react';
import { Activity, CreditCard, Shield } from 'lucide-react';

const BankPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 animate-gradient">
      <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-10 h-10">
              <path d="M50 0c27.6 0 50 22.4 50 50S77.6 100 50 100 0 77.6 0 50 22.4 0 50 0z" fill="#ffff00"/>
            </svg>
            <span className="text-2xl font-bold text-yellow-400">BankPro™</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:text-yellow-600 transition">Services</a>
            <a href="#" className="text-black hover:text-yellow-600 transition">About</a>
            <a href="#" className="text-black hover:text-yellow-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24">
        <section className="h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-6">Banking for the Digital Age</h1>
            <p className="text-xl mb-8 text-black/80">
              Experience seamless financial management with cutting-edge security and intuitive features.
            </p>
            <button className="bg-black text-yellow-400 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
              Get Started
            </button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 py-20">
          <div className="bg-black/5 backdrop-blur-lg p-8 rounded-2xl hover:transform hover:-translate-y-1 transition">
            <Activity className="w-12 h-12 mb-4 text-yellow-600" />
            <h3 className="text-xl font-bold mb-4">Real-time Analytics</h3>
            <p className="text-black/70">Track your spending patterns and financial health with advanced analytics tools.</p>
          </div>
          
          <div className="bg-black/5 backdrop-blur-lg p-8 rounded-2xl hover:transform hover:-translate-y-1 transition">
            <CreditCard className="w-12 h-12 mb-4 text-yellow-600" />
            <h3 className="text-xl font-bold mb-4">Smart Cards</h3>
            <p className="text-black/70">Contactless payments with intelligent spending limits and instant notifications.</p>
          </div>
          
          <div className="bg-black/5 backdrop-blur-lg p-8 rounded-2xl hover:transform hover:-translate-y-1 transition">
            <Shield className="w-12 h-12 mb-4 text-yellow-600" />
            <h3 className="text-xl font-bold mb-4">Bank-grade Security</h3>
            <p className="text-black/70">Advanced encryption and multi-factor authentication to protect your assets.</p>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientAnimation 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default BankPage;