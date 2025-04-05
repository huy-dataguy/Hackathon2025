import React from 'react';

const Home = () => {
  return (
    <div className="max-w-sm mx-auto mt-8">
      <form className="space-y-6">
        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your age</label>
        <input
          id="age"
          type="number"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your age"
        />

        <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your height (in cm)</label>
        <input
          id="height"
          type="number"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your height"
        />

        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
        <select
          id="gender"
          className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Choose your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="activity" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Activity Level</label>
        <select
          id="activity"
          className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Choose activity level per week</option>
          <option value="1">1/7</option>
          <option value="2">2/7</option>
          <option value="3">3/7</option>
          <option value="4">4/7</option>
          <option value="5">5/7</option>
          <option value="6">6/7</option>
          <option value="7">7/7</option>
        </select>

        <label htmlFor="diet" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Diet Type</label>
        <select
          id="diet"
          className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>

        <label htmlFor="taste" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Taste Preference</label>
        <select
          id="taste"
          className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Choose your taste preference</option>
          <option value="sweet">Sweet</option>
          <option value="salty">Salty</option>
          <option value="spicy">Spicy</option>
          <option value="sour">Sour</option>
        </select>

        <label htmlFor="mealType" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Meal Type</label>
        <select
          id="mealType"
          className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="homemade">Homemade</option>
          <option value="takeout">Takeout</option>
        </select>

        <div className="text-center mt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
