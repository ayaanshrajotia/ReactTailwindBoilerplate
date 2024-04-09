import React from "react";
import MathOptionBox from "./MathOptionBox";

const options = [
    {
        id: 1,
        title: "Arithematic",
        sub: "Introductory",
        icon: "./images/equation1.png",
    },
    {
        id: 2,
        title: "Basic Algebra",
        sub: "Foundational",
        icon: "./images/equation2.png",
    },
    {
        id: 3,
        title: "Intermediate Algebra",
        sub: "Intermediate",
        icon: "./images/equation3.png",
    },
    {
        id: 4,
        title: "Calculus",
        sub: "Advanced",
        icon: "./images/equation4.png",
    },
];

export default function MathPage() {
    return (
        <div className="flex flex-col items-center flex-1">
            <h1 className="text-[34px] font-semibold mb-6 mt-8">
                What is your math comfort level?
            </h1>
            <p className="text-gray-600 mb-16">
                Choose the highest level you feel confident in - you can always
                adjust later.
            </p>
            <div className="flex gap-4 max-lg:flex-col">
                {options.map((option) => (
                    <MathOptionBox key={option.id} {...option} />
                ))}
            </div>
        </div>
    );
}
