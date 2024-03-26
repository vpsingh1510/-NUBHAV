import React from 'react';
import '../styles/home.css'; // Import CSS file for styling
import PopularJobsSection from './PopularJobsSection'; // Import PopularJobsSection component

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      

      {/* Main content */}
      <main>
        {/* Hero section */}
        {/* Here you can place any hero section content */}
        
        {/* Popular Jobs Section */}
        <PopularJobsSection />
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
