function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="
        bg-indigo-600
        hover:bg-indigo-500
        px-4
        py-2
        rounded-lg
        text-white
        font-medium
        transition
      "
    >
      {children}
    </button>
  );
}

export default Button;