import React from "react"
import Image from "next/image"

const Project = (obj: any) => {
    let hei = "front1.jpeg"
    let front = require("../data/images/" + obj.frontImage);

    return (
        <div className="flex flex-col md:flex-row bg-slate-800 w-11/12 mt-10 mx-auto h-104 rounded-xl border-2 border-slate-700 p-3"> 
        
            <div className="border-slate-500 border-2 rounded-xl md:w-3/6 max-w-[40rem] h-80 overflow-hidden">
                <div className="relative w-0 mx-auto">
                    <div className="absolute left-[-20rem] w-[40rem] mx-auto">
                        <Image 
                            src={front} 
                            alt="frontimage" 
                        />
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-white ">{obj.header}</h1>
            </div>
            
        </div>
    )
}

export default Project;