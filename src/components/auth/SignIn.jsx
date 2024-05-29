import React, { useState } from "react";
import screenshot from "../../assets/screen.png";
import logo from "../../assets/favicon.ico";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [googleUserData, setGoogleUserData] = useState({
    name: "",
    picture: "",
    email: "",
  });
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setGoogleUserData(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-gradient-to-r from-neutral-900 to-[#13002b]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-20 w-auto" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </nav>
      </header>

      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <motion.h1
                className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl"
                initial={{ y: +1500, opacity: 0 }}
                animate={{ y: 0, opacity: 2 }}
                transition={{ type: "spring", duration: 2 }}
              >
                <span className="bg-gradient-to-r from-indigo-500 to-[#ED3B77] bg-clip-text text-transparent text-9xl">
                  Hope
                </span>

              </motion.h1>
              <p className="mt-10 leading-9 text-xl text-white">
              "Hope is your digital companion, dedicated to fostering mental wellness, championing accessibility, and sparking imaginative journeys through personalized experiences tailored just for you."
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <motion.div
                  className="text-4xl font-semibold text-gray-800 text-center mt-5"
                  initial={{ y: +1500, opacity: 0 }}
                  animate={{ y: 0, opacity: 2 }}
                  transition={{ type: "spring", duration: 2 }}
                >
                  <button
                    onClick={handleGoogleLogin}
                    className="text-lg md:text-xl lg:text-xl text-gray-400 p-3 border-gray-400 border-2 rounded-2xl  shadow-sm shadow-gray-300 flex justify-center items-center gap-2 hover:scale-95 hover:shadow-xl hover:shadow-pink-800"
                  >
                    <FcGoogle className="text-3xl" />
                    Continue With Google
                  </button>
                </motion.div>
              </div>
            </div>
            <img
              src={screenshot}
              //   src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24 shadow-pink-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
