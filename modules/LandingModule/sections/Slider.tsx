import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface SliderProps {
  isSliding: boolean;
  handleDiveIn: () => void;
}

const Slider = ({ isSliding, handleDiveIn }: SliderProps) => {
  return (
    <div
      className={`${
        isSliding ? "-translate-y-full" : "translate-y-0"
      } fixed inset-0 z-[9999] bg-[url('/hero-image.png')] bg-cover bg-center transition duration-800 ease-in`}
    >
      <div className="flex flex-col gap-6 sm:gap-12 justify-center items-center w-full h-full bg-gradient-to-b from-black/95 via-black/80 to-black/95">
        <img src="/logo-gradient.webp" alt="logo" className="min-w-80 w-3/5" />
        <Button onClick={handleDiveIn}>
          Dive In <ArrowDown className="stroke-3" />
        </Button>
      </div>
    </div>
  );
};

export default Slider;
