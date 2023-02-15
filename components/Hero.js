import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10 relative">
      <div className="w-full">
        <Image src={"/movie.jpg"} width={27} height={10} layout="responsive" alt="home cinema" />
      <h1 className="p-2 text-3xl text-white uppercase font-bold absolute top-7 left-3">Watch Popular movies Here.</h1>
      </div>
      {/* <p className="text-gray-500">Produce FILM feature, TELEVISION and GAME.</p */}
      {/* <Link href="/contact" passHref>
        <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">CONTACT US</button>
      </Link> */}
    </div>
  );
};

export default Hero;
