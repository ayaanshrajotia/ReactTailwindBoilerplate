import { Circle } from "rc-progress";
import React, { useEffect, useState } from "react";
import PathContainer from "./PathContainer";

export default function RecommendPage() {
    const [loading, setLoading] = useState(false);

    const loadingHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    // useEffect(() => {
    //     loadingHandler();
    // }, []);

    return (
        <div className="relative p-10 min-h-screen w-full flex justify-center items-center">
            {loading ? (
                <div className="flex flex-col items-center gap-5">
                    <img
                        src={"/images/loader.gif"}
                        alt=""
                        className="w-[100px]"
                    />
                    <p className="text-2xl font-bold">
                        Finding learning path recommendations for you based on
                        your responses
                    </p>
                </div>
            ) : (
                <div className="">
                    <div className="text-center">
                        <h1 className="text-[38px] font-semibold mb-6">
                            Learning paths based on your answers
                        </h1>
                        <p className="text-gray-600 mb-12 text-lg">
                            Choose one to get started. You can switch anytime.
                        </p>
                    </div>
                    <div className="flex gap-4 max-md:flex-col">
                        <PathContainer
                            title={"Foundational Math"}
                            desc={
                                "Build your foundational skills in algebra, geometry and probability."
                            }
                            isPopular={true}
                        />
                        <PathContainer
                            title={"Mathematical Thinking"}
                            desc={
                                "Build your foundational skills in algebra, geometry and probability."
                            }
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
