import { MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:h-[12.5rem] bg-accents-grey-4 flex max-lg:flex-col justify-between py-9 px-12 max-lg:gap-y-10">
      <div className="h-full w-fit flex flex-col max-lg:w-full max-lg:items-center justify-between">
        <div className="w-80 lg:w-96 h-24">
          <img src="/logo.webp" alt="logo" className="object-contain h-full" />
        </div>
        <h1 className="max-lg:hidden text-h6 font-tt-squares font-bold">
          © 2025 AUAV Universitas Indonesia. All Rights Reserved
        </h1>
      </div>
      <div className="h-full w-fit flex flex-col max-lg:w-full max-lg:items-center justify-between max-sm:gap-y-4">
        <h1 className="flex text-b5 sm:text-b4 font-sora text-center rounded lg:text-right w-[17rem] sm:w-96 max-lg:-translate-x-4">
          <MapPin className="shrink-0" />
          Pusgiwa UI, Gedung D Lt. 7, Jl. Prof. Dr. Fuad Hassan, Kukusan,
          Kecamatan Beji, Kota Depok, Jawa Barat 16425
        </h1>
        <div className="flex max-lg:justify-center flex-row-reverse gap-x-6">
          <Link href="/">
            <img src="/vectors/facebook.svg" alt="facebook" />
          </Link>
          <Link href="/">
            <img src="/vectors/youtube.svg" alt="youtube" />
          </Link>
          <Link href="/">
            <img src="/vectors/linkedin.svg" alt="linkedin" />
          </Link>
          <Link href="/">
            <img src="/vectors/instagram.svg" alt="instagram" />
          </Link>
        </div>
      </div>
      <h1 className="lg:hidden text-b4 sm:text-h6 text-center font-tt-squares font-bold">
        © 2025 AUAV Universitas Indonesia. All Rights Reserved
      </h1>
    </footer>
  );
};

export default Footer;
