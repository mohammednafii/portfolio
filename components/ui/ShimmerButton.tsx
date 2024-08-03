import React from 'react'

const ShimmerButton = ({
    title, icon,handleClick , otherClasses
}  
:{
    title : string;
    icon : React.ReactNode;
    handleClick ?: () => void; 
    otherClasses ?: String;
}) => {
  return (
    <button className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors ${otherClasses}`}>
    <p className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-80 ">
        {title } 
      </p>
      {icon}
  </button>
  )
}

export default ShimmerButton