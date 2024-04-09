import React from "react";

export default function RightPlacePage() {
    return (
        <div className="flex mt-16 mb-8">
            <div className="basis-1/2 flex justify-center items-center max-md:hidden">
                <img src="./images/pulley.png" alt="" className="w-[300px]" />
            </div>
            <div className="basis-1/2 flex flex-col justify-center pr-16 max-md:pr-0 max-md:basis-full">
                <h1 className="text-[34px] font-semibold mb-6">
                    You're in the right place!
                </h1>
                <p className="text-gray-600 mb-12">
                    Brilliant gets you hands-on help to improve your
                    professional skills and knowledge. You'll interactwith
                    concepts and solve fun problems in math, science, and
                    computer science.
                </p>
            </div>
        </div>
    );
}
