// Interaction.jsx

import React from 'react';

const Interaction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Dummy Interaction Page</h2>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Button 1
          </button>
          <button className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Button 2
          </button>
          <button className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Button 3
          </button>
        </div>
        <div className="text-sm text-center mt-8">
          <p className="font-medium text-gray-600">
            This is a dummy interaction page. You can perform various actions here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interaction;
