import React from "react";
import { ReactTyped } from "react-typed";
function Home() {
  return (
    <div className="min-w-screen min-h-screen  flex justify-center items-center">
      <div className="w-[800px] text-[#e878d9] p-2">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4 rounded-md">
          <ReactTyped
            strings={[
              "Welcome To Task Manager....",
              "Manage your Regular Work....",
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
            className="text-[50px] mt-20 text-[#0d0303] font-serif items-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
