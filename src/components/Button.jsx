import className from "classnames";
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "px-3 py-1.5 text-lg capitalize font-bold border mb-2 flex items-center gap-2",
    {
      "bg-blue-500 border-blue-500 text-white hover:bg-blue-900 transition":
        primary,
      "bg-gray-500 border-gray-500 text-white": secondary,
      "bg-green-500 border-green-500 text-white": success,
      "bg-red-500 border-red-500 text-white": warning,
      "bg-yellow-500 border-yellow-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white text-blue-500": outline && primary,
      "bg-white text-gray-500": outline && secondary,
      "bg-white text-green-500": outline && success,
      "bg-white text-red-500": outline && warning,
      "bg-white text-yellow-500": outline && danger,
    }
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variationCheck: function ({ primary, success, secondary, warning, danger }) {
    const count =
      Number(!!primary) +
      Number(!!success) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error("Only one variation of prop can be included");
    }
  },
};

export default Button;
