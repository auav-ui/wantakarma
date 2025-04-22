import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">About</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export const Navbar = () => {
  return (
    <nav className="h-16 bg-accents-grey-4 py-4 px-10 font-tt-squares flex justify-between items-center">
      <img src="/logo.webp" alt="logo" className="h-full" />
      <div className="flex space-x-10 text-b4">
        <Link href="/">Home</Link>
        <Link href="/">Profile</Link>
        <Link href="/">Management</Link>
        <Link href="/">Achievements</Link>
        <Link href="/">Gallery</Link>
        <Link href="/">Contact Us</Link>
      </div>
    </nav>
  );
};
