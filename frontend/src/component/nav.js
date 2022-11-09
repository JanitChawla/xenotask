import React from "react";

const Nav = () => {
  return (
    <nav style={{ height: "5rem" }} class="dark:bg-gray-900 shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div class="md:flex items-center space-x-1">
              <a href="/" class="py-4 px-2 dark:text-white font-semibold ">
                Home
              </a>
              <a
                href="/contact"
                class="py-4 px-2 dark:text-white font-semibold transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div class="md:flex items-center space-x-3 ">
            <a
              href="/login"
              class="py-2 px-2 font-medium text-white rounded  transition duration-300"
            >
              Log In
            </a>
            <a
              href="/signup"
              class="py-2 px-2 font-medium text-white rounded  transition duration-300"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
