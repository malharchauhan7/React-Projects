// eslint-disable-next-line no-unused-vars
import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed w-full h-screen z-[2] '>
         <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-bold text-xl '>Notes.</div>
         <h1 className='absolute text-9xl top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 leading-none tracking-tight font-bold'>KeepNotes</h1>
    </div>
    </>
  )
}

export default Background