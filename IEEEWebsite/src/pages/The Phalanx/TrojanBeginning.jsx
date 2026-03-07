import React from "react";
import clockIcon from "../../assets/clockIcon.png"
import fullImg1 from "../../assets/fullImg1.jpg"

const TrojanBeginning = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center h-auto w-full justify-center  gap-10 py-10 px-15">
      <div className="flex flex-col gap-3 lg:w-[50%] w-[80%]">
        <div className="w-15 h-15 bg-IEEE-Orange border-IEEE-Orange rounded-2xl flex items-center justify-center">
          <img
            className="w-8 h-8"
            src={clockIcon}
            alt=""
          />
        </div>

        <h1 className="uppercase text-5xl text-IEEE-Blue font-extrabold">
          Our Trojan <span className="text-IEEE-Orange">Beginning</span>
        </h1>
        <div className="flex flex-col xl:text-2xl text-lg gap-5">
          <p>
            The IEEE Virginia State University Student Branch is a newly
            established organization, founded in 2026 by a dedicated group of
            engineering students passionate about technology and innovation. We
            represent the next generation of Trojan engineers ready to make our
            mark in IEEE Region 3.
          </p>
          <p>
            Our branch carries forward VSU's 145-year legacy of producing
            exceptional leaders while embracing the university's motto:{" "}
            <span className="font-bold text-IEEE-Blue">
              "Greater Happens Here."
            </span>{" "}
            As a new chapter, we're building a strong foundation focused on
            professional development, technical excellence, and community
            impact.
          </p>
          <p>
            As an emerging IEEE student branch at a premier HBCU, we're
            committed to diversity in STEM and creating pathways for
            underrepresented communities in engineering. Our journey is just
            beginning, and we invite you to be part of our founding success
            story.
          </p>
        </div>
      </div>

      <div className="lg:w-[50%] w-[80%]">
        <img
          className="w-full h-auto border-2 rounded-3xl border-IEEE-Orange shadow-2xl"
          src={fullImg1}
          alt=""
        />
      </div>
    </div>
  );
};

export default TrojanBeginning;
