import { FormControl } from "./FormControl";

export const Card = () => {
  return (
    <div className="card-body">
      <h2 className="card-title">Settings</h2>
      <FormControl
        title="File"
        type="file"
        className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs"
      />
      <FormControl
        title="Padding"
        type="range"
        className="range range-primary range-sm"
        min="0"
        max="100"
      />
      <FormControl
        title="Shadow"
        type="range"
        className="range range-primary range-sm"
        min="0"
        max="100"
      />
      <FormControl
        title="Radius"
        type="range"
        className="range range-primary range-sm"
        min="0"
        max="100"
      />
    </div>
  );
};
