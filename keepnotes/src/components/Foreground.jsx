/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc:
        "Lorem ipsum dolor sit amet concessitati, itaque numquam, vero ducimus nihil face.",
      filesize: "0.8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Hello This is description 2",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Hello This is description 2",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Hello This is description 2",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "green",
      },
    },
  ];
  console.log(data);
  return (
    <>
      <div
        ref={ref}
        className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-6"
      >
        {data.map((item, index) => (
          <Cards data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
