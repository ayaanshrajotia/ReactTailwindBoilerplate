import React from "react";

export default function PathContainer({ title, desc, isPopular }) {
    return (
        <div className="relative rounded-xl border-2 p-6 py-10 flex max-w-[480px] w-full gap-3 hover:shadow-[0px_8px_24px_0px_rgba(149,157,165,0.2)] transition-all cursor-pointer max-sm:flex-col">
            {isPopular && (
                <div className="absolute uppercase bg-[#ffb224] rounded-full p-2 px-3 text-sm font-medium top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
                    most popular
                </div>
            )}
            <div className="">
                <p className="text-lg">
                    <span className="font-bold">{title}</span> {desc}
                </p>
            </div>
            <img src="/images/machine.png" alt="path" className="w-[150px]" />
        </div>
    );
}
