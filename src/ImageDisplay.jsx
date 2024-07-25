import Image from "next/image";

export const ImageDisplay = ({ settings }) => {
  return (
    <div style={{ display: "flex", padding: `${settings.padding}px` }}>
      <Image
        src="/PORTRAITS V3.JPG"
        alt="portrait"
        width={200}
        height={200}
        style={{
          borderRadius: `${settings.radius}px`,
          boxShadow: `rgba(0, 0, 0, .${settings.shadow}) 0 0 ${settings.shadow}px`,
          display: "flex",
        }}
      />
    </div>
  );
};
