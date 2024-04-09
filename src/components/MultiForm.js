import ProgressBar from "@ramonak/react-progress-bar";
import { useMultistepForm } from "../useMultistepForm";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import DescribePage from "./DescribePage";
import InterestPage from "./InterestPage";
import RightPlacePage from "./RightPlacePage";
import MathPage from "./MathPage";
import OnYourWayPage from "./OnYourWayPage";
import RecommendPage from "./RecommendPage";
import { useState } from "react";

const INITIAL_DATA = {
    describe: "",
    interest: "",
    math: "",
};

function MultiForm() {
    const [data, setData] = useState(INITIAL_DATA);
    const updateFields = (field) => {
        setData((prevData) => {
            return {
                ...prevData,
                ...field,
            };
        });
    };
    const {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        back,
        next,
        isLastStep,
    } = useMultistepForm([
        <DescribePage {...data} updateFields={updateFields} />,
        <InterestPage {...data} updateFields={updateFields} />,
        <RightPlacePage {...data} />,
        <MathPage {...data} updateFields={updateFields} />,
        <OnYourWayPage {...data} />,
    ]);

    const onSubmit = (e) => {
        e.preventDefault();
        next();
    };

    console.log(steps.length, currentStepIndex);

    return (
        <div className="relative p-10 min-h-screen w-full">
            <form onSubmit={onSubmit} className="flex flex-col h-full">
                <div className="flex items-center gap-3 w-full">
                    {!isFirstStep && !isLastStep ? (
                        <ChevronLeftIcon
                            className="w-6 h-6 cursor-pointer"
                            onClick={back}
                        />
                    ) : (
                        <ChevronLeftIcon
                            className="w-6 h-6 opacity-0"
                            onClick={back}
                        />
                    )}
                    <ProgressBar
                        completed={currentStepIndex + 1}
                        maxCompleted={steps.length}
                        customLabel=" "
                        height="6px"
                        borderRadius="0px"
                        className="flex-1"
                        bgColor="green"
                    />
                </div>
                <div className="flex flex-col items-center mt-7 h-full">
                    {step}
                    {steps.length - 1 !== currentStepIndex && (
                        <button
                            type="submit"
                            className="bg-black text-white w-fit px-12 py-3 rounded-lg mt-6"
                        >
                            Continue
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default MultiForm;
