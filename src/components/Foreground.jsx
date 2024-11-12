import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref= useRef(null);

  const data=[
    {
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      filesize: '4mb',
      close:true,
      tag:{ isOpen:false, tagTitle:'Download Now', tagColor:'blue'},
    },
    {
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      filesize: '4mb',
      close:false,
      tag:{ isOpen:true, tagTitle:'Download Now', tagColor:'lime'},
    },
    {
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      filesize: '4mb',
      close:false,
      tag:{ isOpen:true, tagTitle:'Upload', tagColor:'blue'},
    },
  ]

  return (
    <>
      <div ref={ref} className='fixed top-3 left-3 z-[3] w-full h-full flex gap-5 flex-wrap'>
        {data.map((i,idx) => (
          <Card key={idx} data={i} reference={ref}/>     
        ))}
      </div>
    </>
  )
}

export default Foreground
