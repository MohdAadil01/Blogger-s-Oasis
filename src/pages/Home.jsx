import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl font-['Montserrat']">
          Join Us at Blogger's Oasis:
          <br />
          Where Ideas Flourish
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm font-['Roboto']">
          Welcome to Blogger's Oasis, where words come to life and ideas
          flourish. Dive into a world of captivating stories, insightful
          articles, and thought-provoking discussions
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline font-['Montserrat']"
        >
          Discover posts
        </Link>
      </div>
      {/* <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div> */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7"></div>
    </div>
  );
}
