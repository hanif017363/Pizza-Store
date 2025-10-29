import React from "react";
import SectionHeader from "./SectionHeader";

function About() {
  return (
    <>
      <div className="text-center my-16">
        <SectionHeader subHeader="Our Story" mainHeader="About Us" />
        <div
          className="max-w-md mx-auto mt-4 text-gray-500 flex flex-col
          gap-4"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            sapiente veniam deleniti eligendi! Soluta tempora sint sed non
            dolore quam cumque similique consequatur! Ut iste, nihil quasi nobis
            veniam dolore tempore sint fuga error alias tenetur consequatur
            quibusdam quam dolorem. Nobis distinctio in, velit corporis est
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            ipsum? Nesciunt, similique dolor perspiciatis architecto esse itaque
            placeat laborum sit deleniti voluptatem sint rem obcaecati ratione?
            Esse voluptatibus recusandae labore?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            provident quaerat debitis. Quia obcaecati consequatur nihil
            similique accusantium distinctio dignissimos.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
