import React, { useState } from "react";

// local
import Week1 from "./projects/week1/Loading";
import Note1 from "./projects/week1/Note";
import Week2 from "./projects/week2/Test";
import Note2 from "./projects/week2/TestNote";

const pages = [0, 1];
const projects = [<Week1 />, <Week2 />];
const notes = [<Note1 />, <Note2 />];

const Lee = () => {
  const [page, setPage] = useState(<Week1 />);
  const [note, setNote] = useState(<Note1 />);

  const onclick = (idx) => {
    setPage(projects[idx]);
    setNote(notes[idx]);
  };

  return (
    <div className="h-screen bg-[#aaddaa] flex justify-center">
      <div className="w-2/3 flex flex-col mt-12 justify-start">
        <div className="flex flex-row">
          {pages.map((idx) => (
            <div
              key={idx}
              className="py-1 px-4 w-fit bg-white rounded-t-md text-center text-[#609060] text-lg"
              onClick={() => {
                onclick(idx);
              }}
            >
              {idx + 1}주차
            </div>
          ))}
        </div>

        <div className="w-full h-2/3 bg-white rounded-b-lg rounded-r-lg flex flex-row">
          <div className="w-1/2 h-wrap m-3 bg-[#5a7a5a] rounded-md flex items-center justify-center">
            {page}
          </div>
          <div className="w-1/2 h-wrap m-3 bg-[#5a7a5a] rounded-md flex justify-center">
            {note}
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://c.tenor.com/smxDF7eQs6EAAAAi/%EB%8B%AC%EB%A6%AC%EB%8A%94%EB%86%8D%EB%8B%B4%EA%B3%B0-joke-bear.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Lee;
