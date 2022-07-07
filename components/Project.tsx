import React from "react"
import Image from "next/image"

const Project = (obj: any) => {
    let hei = "front1.jpeg"
    let front = require("../data/images/" + obj.frontImage);

    return (
        <div>
            <h1 className="text-white mt-10 text-center text-2xl font-bold">{obj.header}</h1>
            <div className="flex flex-col md:flex-row bg-slate-800 w-11/12 mt-2 mx-auto h-104 rounded-xl border-2 border-slate-700 p-3"> 
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

                <div className="w-full md:w-1/2">
                    <h1 className="text-white text-center text-2xl font-bold mt-8">{obj.subheader}</h1>
                    <h2 className="text-white text-center mt-6"> Technology Used</h2>


                    <div className="flex justify-around">
                        {obj.technology.map((tech: any) => (
                            <div className="w-1/2 md:w-1/4">
                                <div className="bg-slate-700 border-2 border-slate-700 rounded-xl p-3">
                                    <h1 className="text-white text-center text-2xl font-bold">{tech.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Project;