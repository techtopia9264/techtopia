import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigator = () => {

  return (
    <header
      className={`fixed top-0 left-0 w-full py-2 bg-white z-50 transition-all duration-300 glass`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex justify-start">
            {/* Replace the src and alt attributes with your own logo */}
            <Image src="/IMG_2394.png" alt="TechTopia Logo" width={50} height={50} />
            <div className="ml-2 font-bold subpixel-antialiased text-3xl flex items-center text-slate-200" style={{heigt: '50px', textShadow:'3px 2px 5px dimgray'}}>TECHTopia</div>
          </div>
          <nav className="space-x-4">
            <Link className="text-gray-800 hover:text-gray-600" href="/blog">
              Blog
            </Link>
            <Link className="text-gray-800 hover:text-gray-600" href="/magic-lab">
              Magic Lab
            </Link>
            <Link className="text-gray-800 hover:text-gray-600" href="/resources">
              Resources
            </Link>
            <Link className="text-gray-800 hover:text-gray-600" href="/about">
              About
            </Link>
            {/* Add user avatar here */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigator;