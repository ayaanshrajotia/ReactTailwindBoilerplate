import { useState } from "react";

export const useMultistepForm = (steps) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        if (currentStepIndex <= steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    }

    function back() {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    }

    function goTo(index) {
        if (index >= 0 && index < steps.length) {
            setCurrentStepIndex(index);
        }
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length,
        next,
        back,
        goTo,
        steps,
    };
};
