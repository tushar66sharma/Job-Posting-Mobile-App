# Job-Finder-Mobile-App

Job Finder is a mobile application built with React Native that helps users explore and search for job opportunities effortlessly. With a clean and visually appealing UI/UX design, this app integrates third-party APIs to provide real-time job data. It offers search and pagination functionality, dynamic home pages tailored to user preferences, and detailed job insights. The app is optimized for all devices, ensuring a smooth user experience across various screen sizes. Key features include:

Visually appealing and user-friendly design
Third-party API integration for job listings
Custom hooks for fetching and displaying job data
Robust error handling and loading states
Dynamic home page and explore functionality
Start exploring jobs by title, category, and location with ease!

⚙️ Tech Stack

This project uses the following technologies:

Node.js
React Native
Axios
Expo
Stylesheet


🏈 Quick Start

Follow these steps to set up the project locally:

Prerequisites

Ensure you have the following installed:

Git

Node.js

npm (Node Package Manager)

Cloning the Repository

git clone https://github.com/adrianhajdin/project_react_native_jobs.git
cd project_react_native_jobs

Installation

Install the project dependencies:

npm install

Set Up Environment Variables

Create a new file named .env in the root of your project.

Add the following content:

X-RapidAPI-Key=YOUR_API_KEY_HERE

Replace YOUR_API_KEY_HERE with your actual API key. Sign up on the RapidAPI website to get your credentials.

Running the Project

Start the development server:

npm start

🔠 Snippets

Here are some useful code snippets to help you get started:

Custom API Hook

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, params]);

  return { data, loading, error };
};

export default useFetch;

Pagination Component




