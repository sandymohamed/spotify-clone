"use client";

import * as RadixSlider from "@radix-ui/react-slider";


interface SliderProps {
    value?: number;
    onChange?: (value: number) => void;
};


const Slider: React.FC<SliderProps> = ({ value = 1, onChange }) => {

    const handleChange = (newValue: number[]) => {
        onChange?.(newValue[0]);
    }

    return (
        <RadixSlider.Root className="ralative flex items-center select-none touch-none w-full h-10" defaultValue={[1]} value={[value]} onValueChange={handleChange} max={1} step={0.1} aria-label="volume" >
            <RadixSlider.Track className="bg-neutral-600 relative  grow h-[3px] rounded-full">
                <RadixSlider.Range className="absolute bg-white roounded-full h-full ">
                </RadixSlider.Range>
            </RadixSlider.Track>
        </RadixSlider.Root>
    )
}

export default Slider;