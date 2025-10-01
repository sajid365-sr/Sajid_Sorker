import React from "react";
//
import Button from "@components/Button";

const GetInTouch = () => {
  return (
    <section id="contact" className="text-center my-4">
      <h1 className="flex items-center gap-2 text-md justify-center font-normal text-sky-400">
        <span className=" font-mono">04. </span>
        What next?
      </h1>

      <h1 className="font-medium text-slate-300 text-4xl text-center mt-5">
        {" "}
        Get In Touch{" "}
      </h1>

      <p className="text-slate-400 max-w-[600px] mx-auto my-3 mb-10">
        Actively seeking new opportunities! I’m always open to exciting roles
        and collaborations. If you have an opportunity, a question, or just want
        to connect, feel free to reach out—I’d be happy to chat!
      </p>

      <Button
        sizeClass="px-5 py-2"
        href="mailto:sajid.sorker@sajidsorker.com"
        outlined
      >
        {" "}
        Say Hello{" "}
      </Button>
    </section>
  );
};

export default GetInTouch;
