import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function OnYourWayPage() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex mt-16 mb-8">
                <div className="basis-1/2 flex justify-center items-center max-md:hidden">
                    <img
                        src="./images/alien.png"
                        alt=""
                        className="w-[300px]"
                    />
                </div>
                <div className="basis-1/2 flex flex-col justify-center pr-16 max-md:basis-full max-md:items-center max-md:pr-0">
                    <h1 className="text-[34px] font-bold mb-6">
                        You're on your way!
                    </h1>
                    <div className="flex mb-6">
                        <StarIcon className="w-12 h-12 text-[#EBAA0A]" />
                        <StarIcon className="w-12 h-12 text-[#EBAA0A]" />
                        <StarIcon className="w-12 h-12 text-[#EBAA0A]" />
                        <StarIcon className="w-12 h-12 text-[#EBAA0A]" />
                        <StarIcon className="w-12 h-12 text-[#EBAA0A]" />
                    </div>
                    <p className="text-gray-600 mb-12 italic text-lg">
                        "Through its engaging and well-structured courses,
                        Brilliance has taught me mathematical concepts that I
                        previously struggled to understand. I now fell confident
                        approaching both technical job interviews and real world
                        problem solving situations."
                    </p>
                    <span className="italic">- Jacob S.</span>
                </div>
            </div>
            <Link
                to={"/learning-paths"}
                className="bg-black text-white w-fit px-12 py-3 rounded-lg mt-10"
            >
                Continue
            </Link>
        </div>
    );
}
