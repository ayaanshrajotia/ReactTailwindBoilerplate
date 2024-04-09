import React from "react";

export default function MathOptionBox({ title, sub, icon }) {
    return (
        <label
            for={title}
            className="pb-4 border-2 rounded-lg hover:shadow-[0px_8px_24px_0px_rgba(149,157,165,0.2)] transition-all hover:border-yellow-500 cursor-pointer flex flex-col items-center justify-center w-[240px] h-[240px] has-[:checked]:border-yellow-500"
        >
            <img
                src={icon}
                alt=""
                className="w-[150px] h-full object-contain"
            />
            <div className="flex flex-col items-center gap-1 mt-auto">
                <span>{title}</span>{" "}
                <span className="text-gray-500 text-lg">{sub}</span>
            </div>
            <input
                type="radio"
                name="group1"
                id={title}
                value="1"
                className="hidden"
            />
        </label>
    );
}
