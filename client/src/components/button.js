function Button({ title, onClick, variant, disabled, fullWidth, type }) {
  let className = "bg-primary p-2 text-white br-2";

  if (fullWidth) {
    className += " w-full";
  }
  if (variant === "outlined") {
    className = className.replace(
      "bg-primary",
      "border border-primary text-primary bg-white"
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
