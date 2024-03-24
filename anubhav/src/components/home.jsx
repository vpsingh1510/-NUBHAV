import React from 'react';
import '../styles/home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-black">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <div className="logo text-xl font-bold">Logo</div>
            
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Hero section */}
        <section className="hero">
          <div className="container mx-auto">
            <h1>Welcome to Anubhav</h1>
            <p>Your slogan or brief description here</p>
            <button>Learn More</button>
          </div>
        </section>

        {/* Features section */}
        <section className="features">
          <div className="container mx-auto">
            <h2>Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature">
                <h3>Feature 1</h3>
                <p>Description of feature 1</p>
              </div>
              <div className="feature">
                <h3>Feature 2</h3>
                <p>Description of feature 2</p>
              </div>
              {/* Add more features as needed */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <p>Contact us: example@email.com</p>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Facebook</a>
            <a href="#" className="text-white hover:text-gray-300">Twitter</a>
            <a href="#" className="text-white hover:text-gray-300">Instagram</a>
          </div>
          <p className="mt-4">&copy; 2024 Anubhav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
