import React from 'react';
import Link from 'next/link';

const Banner = ({ children, backgroundImage, onClick }) => {
  return (
    <div
      className="relative bg-cover bg-center h-96 w-full relative"
      style={{ backgroundImage: `url(${backgroundImage})`, height: '450px' }}
    >
      {children}
    </div>
  );
};

export default Banner;