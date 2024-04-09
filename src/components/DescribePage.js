import React from "react";
import OptionBox from "./OptionBox";

const options = [
    {
        id: 1,
        title: "Student",
        sub: "or soon to be enrolled",
        icon: "/images/download-2.png",
    },
    {
        id: 2,
        title: "Professional",
        sub: "pursing a career",
        icon: "/images/download-3.png",
    },
    {
        id: 3,
        title: "Parent",
        sub: "of a school-age child",
        icon: "/images/download-4.png",
    },
    {
        id: 4,
        title: "Lifelong Learner",
        icon: "/images/download-6.png",
    },
    {
        id: 5,
        title: "Teacher",
        icon: "/images/download-5.png",
    },
    {
        id: 6,
        title: "Other",
        icon: "/images/download-7.png",
    },
];

export default function DescribePage() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[34px] font-semibold mb-6">
                Which describes you best?
            </h1>
            <p className="text-gray-600 mb-12">
                This will help you personalize your experience.
            </p>
            <div className="flex flex-col gap-4 w-full">
                {options.map((option) => (
                    <OptionBox key={option.id} {...option} />
                ))}
            </div>
        </div>
    );
}
