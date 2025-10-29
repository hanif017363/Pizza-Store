import React from "react";

function SectionHeader({ subHeader, mainHeader }) {
  return (
    <>
      <div className="text-center mt-16 ">
        <h3 className="uppercase leading-16 text-gray-600 text-5xl font-semibold">
          {subHeader}
        </h3>
        <h2 className="logo-color font-bold text-4xl italic">{mainHeader}</h2>
      </div>
    </>
  );
}

export default SectionHeader;
