import React from "react";
import OptionBox from "./OptionBox";

const options = [
    {
        id: 1,
        title: "Learning specific skills to advance my career",
        icon: "/images/graph.png",
    },
    {
        id: 2,
        title: "Exploring new topics I'm interested in",
        icon: "/images/earth.png",
    },
    {
        id: 3,
        title: "Refreshing my math foundations",
        icon: "/images/compass.png",
    },
    {
        id: 4,
        title: "Exercising my brain to stay sharp",
        icon: "/images/target.png",
    },
    {
        id: 5,
        title: "Something else",
        icon: "/images/eyes.png",
    },
];

export default function InterestPage() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[34px] font-semibold mb-6">
                Which are you most interested in?
            </h1>
            <p className="text-gray-600 mb-12">
                Just choose one. This will help us get you started (but won't
                limit your experience).
            </p>
            <div className="flex flex-col gap-4">
                {options.map((option) => (
                    <OptionBox key={option.id} {...option} />
                ))}
            </div>
        </div>
    );
}
