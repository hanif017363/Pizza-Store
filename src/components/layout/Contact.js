import React from "react";
import SectionHeader from "./SectionHeader";

function Contact() {
  return (
    <div>
      <section>
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
        <div className="flex justify-center gap-4 text-gray-500 text-4xl items-center mt-8">
          <h1>+01 736 372 773</h1>
          <a
            className="underline logo-color font-semibold"
            href="tel:+8801736372773"
          >
            Call us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
