/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[25px] bg-zinc-900/30 text-white px-8 py-10 overflow-hidden "
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc} </p>

      <div className="footer absolute bottom-0 w-full  left-0  ">
        <div className="flex items-center justify-between mb-2 py-3 px-8">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
            {data.close ? (
              <IoIosClose />
            ) : (
              <LuDownload size=".7em" color="#ffff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-600"
            }  flex items-center justify-center cursor-pointer`}
          >
            <h3 className="text-md ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
