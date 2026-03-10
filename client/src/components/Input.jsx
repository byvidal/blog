function Input(props) {
  return (
    <input
      {...props}
      className="
        w-full
        bg-zinc-900
        border border-zinc-800
        px-4
        py-3
        rounded-lg
        text-white
        outline-none
        focus:border-indigo-500
      "
    />
  );
}

export default Input;