export const ImageDisplay = ({ settings, image }) => {
  return (
    <div style={{ display: "flex", padding: `${settings.padding}px` }}>
      <img
        src={image.src}
        alt="portrait"
        style={{
          borderRadius: `${settings.radius}px`,
          boxShadow: `rgba(0, 0, 0, .${settings.shadow}) 0 0 ${settings.shadow}px`,
          display: "flex",
        }}
      />
    </div>
  );
};
