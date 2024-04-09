import React from "react";

export default function OptionBox({ title, sub, icon }) {
    return (
        <>
            <>
                <label
                    for={title}
                    className="p-4 px-7 border-2 rounded-lg hover:shadow-[0px_8px_24px_0px_rgba(149,157,165,0.2)] transition-all hover:border-yellow-500 cursor-pointer flex items-center gap-8 w-full has-[:checked]:border-yellow-500"
                >
                    <img src={icon} alt="" className="w-[40px]" />
                    <div>
                        <span>{title}</span>{" "}
                        <span className="text-gray-500">{sub}</span>
                    </div>
                    <input
                        type="radio"
                        name="group1"
                        id={title}
                        value="1"
                        className="hidden"
                    />
                </label>
            </>
        </>
    );
}
