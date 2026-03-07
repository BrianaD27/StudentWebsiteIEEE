import React from "react";


const BranchMissionPage = () => {
  return (
    /* Added id="mission" for navigation and changed h-[80vh] to min-h-[60vh] to avoid text cutoff */
    <section id="mission" className="min-h-[60vh] flex flex-col items-center justify-start px-[15%] py-20 bg-white">
      <div className="max-w-5xl w-full"> {/* Wrapped in a container for better text alignment */}
        <div className="flex flex-col items-center mb-10">
          <p className="bg-IEEE-Blue text-white px-4 py-2 rounded-full font-bold my-4">
            THE TROJAN STANDARD
          </p>
          <h1 className="text-4xl font-extrabold mb-4 text-center uppercase">BRANCH MISSION</h1>
        </div>

        <div className="text-start">
          <h3 className="text-IEEE-Orange font-extrabold text-2xl mb-2">OUR MISSION</h3>
          <p className="font-normal text-2xl mb-8 text-Text-Grey leading-relaxed">
            To advance technology for the benefit of humanity by empowering
            Virginia State University's engineering students through professional
            development, technical innovation, and unwavering commitment to the
            Trojan spirit of excellence.
          </p>

          <h3 className="text-IEEE-Orange font-extrabold text-2xl mb-2">OUR VALUES</h3>
          <ul className="list-disc list-inside marker:text-IEEE-Orange text-2xl space-y-4">
            <li className="text-Text-Grey">
              <span className="font-bold text-black"> Excellence: </span>
              We uphold the highest standards in all technical and
              professional endeavors.
            </li>
            <li className="text-Text-Grey">
              <span className="font-bold text-black"> Innovation: </span>
              We embrace creativity and cutting-edge solutions to
              solve real-world problems.
            </li>
            <li className="text-Text-Grey">
              <span className="font-bold text-black"> Integrity: </span>
              We operate with honesty, transparency, and ethical
              conduct.
            </li>
            <li className="text-Text-Grey">
              <span className="font-bold text-black"> Inclusion: </span>
              We champion diversity and create pathways for
              underrepresented communities in STEM.
            </li>
          </ul>

          <p className="font-bold text-2xl mt-12 text-IEEE-Blue italic">
            We are the vanguard of IEEE Region 3, setting the standard for student
            branches across the nation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BranchMissionPage;