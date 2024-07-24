export const FormControl = ({ title, type, className, min, max }) => {
  return (
    <>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{title}</span>
        </div>

        <input type={type} className={className} min={min} max={max} />
      </label>
    </>
  );
};
