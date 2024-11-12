/* eslint-disable react/prop-types */
import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={[{scaleX:1.3},{scaleY:1.3}]} className='relative flex-shrink-0 w-52 h-64 rounded-[15%] bg-zinc-950 px-5 py-10 text-zinc-400 overflow-hidden'>
      <FaFileAlt className=' text-2xl' />
      <p className='text-sm  leading-tight mt-5 font-semibold'>{data.description}</p>
      <div className='footer absolute bottom-0  w-full left-0'>
        <div className='flex items-center justify-between py-2 px-5 text-zinc-900'>
          <h5 className='text-zinc-400'>{data.filesize}</h5>
          <span className='w-6 h-6 bg-zinc-500 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose size=".9em" /> : <RiDownload2Fill size=".8em"/>}
          </span>
        </div>
        {data.tag.isOpen && 
          (
            <div className={`tag w-full py-2 ${data.tag.tagColor==="blue" ? 'bg-blue-700' : 'bg-lime-700' } flex items-center justify-center`}>
              <h3 className='text-md'>{data.tag.tagTitle}</h3>
            </div>
          )
        }   
      </div>
    </motion.div>
 
  )
}

export default Card
