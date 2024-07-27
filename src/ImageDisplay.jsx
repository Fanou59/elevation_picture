/* eslint-disable @next/next/no-img-element */
export const ImageDisplay = ({ settings, image }) => {
  if (!image) {
    return (
      <div role="alert" className="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Upload une image à modifier 😘</span>
      </div>
    );
  }
  return (
    <div style={{ display: "flex" }} className="w-full h-fit border rounded-md">
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
    </div>
  );
};
