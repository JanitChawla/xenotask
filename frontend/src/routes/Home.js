import React from "react";
import "./index.css";
// import { Navigate } from "react-router-dom";
// import jwt, { JsonWebTokenError } from "jsonwebtoken";
import Nav from "../component/nav";
import phone1 from "../assets/phone5.webp";
import phone2 from "../assets/phone4.webp";
import phone3 from "../assets/phone2.webp";

const Home = () => {
  //   const navigate = Navigate();

  //   async function populate() {
  //     const req = await fetch("http://localhost:5000/api/home", {
  //       headers: {
  //         "x-access-token": localStorage.getItem("token"),
  //       },
  //     });

  //     const data = await req.json();
  //     if (data.status === "ok") {
  //       setQuote(data.quote);
  //     } else {
  //       alert(data.error);
  //     }
  //   }

  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       alert("HERE token");
  //       console.log(token);
  //       const user = jwt.decode(token);
  //       if (!user) {
  //         localStorage.removeItem("token");
  //         // window.location.href = "/login";
  //       } else {
  //         populate();
  //       }
  //     }
  //   }, []);

  //   async function updateQuote(e) {
  //     e.preventDefault();
  //     const req = await fetch("http://localhost:5000/api/home", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-access-token": localStorage.getItem("token"),
  //       },
  //       body: JSON.stringify({
  //         quote: tempQuote,
  //       }),
  //     });
  //     const data = await req.json();
  //     if (data.status === "ok") {
  //       setTempQuote("");
  //       setQuote(data.quote);
  //     } else {
  //       alert(data.error);
  //     }
  //   }
  return (
    <div className="dark:bg-gray-900">
      <Nav />
      <h1 className="text-3xl flex item-center justify-center mt-8 dark:text-white font-bold underline">
        BUY YOUR DREAM PHONE
      </h1>
      <div class="rectangle flex md:flex-row flex-col mt-12 justify-center">
        <div class=" h-52 w-40">
          <img alt="?" class="h-52" src={phone1}></img>
        </div>
        <div
          style={{ alignItems: "center" }}
          class="flex justify-center align-center dark:text-white h-52 w-40"
        >
          ₹120000
        </div>
        <div
          style={{ alignItems: "center" }}
          class="dark:text-white flex h-52 w-40"
        >
          <button class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
            Buy Now
          </button>
        </div>
      </div>
      <div class="rectangle flex md:flex-row mt-12 flex-col justify-center">
        <div class=" h-52 w-40">
          <img alt="?" class="h-52" src={phone2}></img>
        </div>
        <div
          style={{ alignItems: "center" }}
          class="flex justify-center align-center dark:text-white h-52 w-40"
        >
          ₹72000
        </div>
        <div
          style={{ alignItems: "center" }}
          class="flex dark:text-white h-52 w-40"
        >
          <button class="inline-block  px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
            Buy Now
          </button>
        </div>
      </div>
      <div class="rectangle flex md:flex-row mt-12 flex-col justify-center">
        <div class=" h-52 w-40">
          <img alt="?" class="h-52" src={phone3}></img>
        </div>
        <div
          style={{ alignItems: "center" }}
          class="flex justify-center align-center dark:text-white h-52 w-40"
        >
          ₹20000
        </div>
        <div
          style={{ alignItems: "center" }}
          class="dark:text-white h-52 flex w-40"
        >
          <button class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
