"use client";

import { Card } from "@/src/Card";
import { ImageDisplay } from "@/src/ImageDisplay";
import { useState } from "react";
import { renderPNG } from "./render-png";

export default function Home() {
  const [settings, setSettings] = useState({
    padding: 16,
    shadow: 16,
    radius: 20,
  });
  const [image, setImage] = useState({
    src: "",
  });

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const fileName = file.name;
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = new Image();
      img.onload = () =>
        setImage({
          src: img.src,
          width: img.width,
          height: img.height,
          name: fileName,
        });
      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  const setSetting = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };
  return (
    <main className="w-full flex justify-center max-w-4xl px-4 py-8 max-lg:flex-col m-auto gap-8 lg:gap-16 min-h-full text-black">
      <div className="flex-1 flex items-center justify-center">
        <div className="card max-w-lg flex-1 bg-base-200 shadow-xl">
          <Card
            settings={settings}
            setSetting={setSetting}
            setImage={handleImageUpload}
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full h-fit border rounded-md">
          {image.src !== "" ? (
            <ImageDisplay settings={settings} image={image} />
          ) : (
            <p>Envoie une image à modifier</p>
          )}
        </div>
        <button
          className="btn"
          disabled={!image}
          onClick={async () => {
            const { blob } = await renderPNG({
              image,
              settings,
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${image.name}.png`;
            a.click();
          }}
        >
          Download
        </button>
      </div>
    </main>
  );
}
