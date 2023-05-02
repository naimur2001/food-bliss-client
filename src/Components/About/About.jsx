import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen mt-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="max-w-lg text-center mb-8">
        We are a team of passionate food lovers who believe that good food is
        not just about taste, but also about the memories and experiences it
        creates. Our mission is to help you discover new and exciting culinary
        adventures that you can enjoy with your loved ones.
      </p>
      <p className="max-w-lg text-center mb-8">
        We source our recipes from all over the bengal and ensure that they are
        easy to follow, using ingredients that are readily available. Whether
        you're a seasoned cook or a newbie in the kitchen, our recipes are
        tailored to suit all skill levels.
      </p>
      <p className="max-w-lg text-center mb-8">
        Our website also features a variety of food, recipe, food-related content, including
        articles on the latest food trends, cooking tips and tricks, and
        restaurant reviews. We believe that food is not just a necessity, but a
        lifestyle, and we're excited to share our passion with you.
      </p>
      <Link
        to="/contact"
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition-colors"
      >
        Contact Us
      </Link>
    </div>
    </div>
  );
};

export default About;