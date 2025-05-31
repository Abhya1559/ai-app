import Image from "next/image";
import Landing from "@/app/pages/Home/page";
export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent mt-20">
          Hello this is World of AI !!
        </h1>
        <div>
          <Landing />
        </div>
      </div>
    </div>
  );
}
