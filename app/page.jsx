"use client";

import { Card } from "@/src/Card";
import { ImageDisplay } from "@/src/ImageDisplay";
import { useState } from "react";

export default function Home() {
  const [settings, setSettings] = useState({
    padding: 16,
    shadow: 16,
    radius: 20,
  });

  const setSetting = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };
  return (
    <main className="w-full flex justify-center max-w-4xl px-4 py-8 max-lg:flex-col m-auto gap-8 lg:gap-16 min-h-full text-black">
      <div className="flex-1 flex items-center justify-center">
        <div className="card max-w-lg flex-1 bg-base-200 shadow-xl">
          <Card settings={settings} setSetting={setSetting} />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full h-fit border rounded-md">
          <ImageDisplay settings={settings} />
        </div>
      </div>
    </main>
  );
}
