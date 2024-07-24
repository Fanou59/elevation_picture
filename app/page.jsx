import Image from "next/image";
import { Card } from "@/src/card";

export default function Home() {
  return (
    <main className="w-full flex justify-center max-w-4xl px-4 py-8 max-lg:flex-col m-auto gap-8 lg:gap-16 min-h-full text-black">
      <div className="flex-1 flex items-center justify-center">
        <div className="card max-w-lg flex-1 bg-base-200 shadow-xl">
          <Card />
        </div>
      </div>
      <div>Preview</div>
    </main>
  );
}
