import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"

const About = () => {
    return (
        <div className="container w-5/6 px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-white lg:text-5xl dark:text-gray-900">
                        Hey there,
                    </h1>
                    <div className="mt-6 text-white dark:text-gray-800"> 
                        <p className="mb-4">
                            I'm Sondre, a student and studying 3 year bachelor in informatics at "Norwegian University of Science and Technology" (NTNU) Based In Trondheim, Norway.
                            This is a portfolio website where I showcase some of my personal projects and skills in the field of software development.
                            If you would like to know more about me, you can check out my CV or contact me. 
                        </p>
                    </div>
                    <a href="https://cv.alfnes.dev/"><button className="bg-white px-5 border-2 rounded mr-5">My CV</button></a>
                    <a href="mailto:sondre.alfnes@gmail.com"><button className="bg-white px-5 border-2 rounded">Send me a mail</button></a>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>


        </div>
    )
}

export default About;