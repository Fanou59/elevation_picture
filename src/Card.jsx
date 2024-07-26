export const Card = ({ settings, setSetting, setImage }) => {
  return (
    <div className="card-body">
      <h2 className="card-title">Settings</h2>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">File</span>
        </div>
        <input
          onChange={setImage}
          type="file"
          className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs"
        />
      </label>
      <FormControl
        title="Padding"
        name="padding"
        value={settings.padding}
        handleChange={setSetting}
      />
      <FormControl
        title="Shadow"
        name="shadow"
        value={settings.shadow}
        handleChange={setSetting}
      />
      <FormControl
        title="radius"
        name="radius"
        value={settings.radius}
        handleChange={setSetting}
      />
    </div>
  );
};

const FormControl = ({ title, name, value, handleChange }) => {
  return (
    <>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{title}</span>
        </div>
        <input
          onChange={(e) => handleChange(name, Number(e.target.value))}
          type="range"
          className="range range-primary range-sm"
          min="0"
          max="100"
          name={name}
          value={value}
        />
      </label>
    </>
  );
};
