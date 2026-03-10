function Card({ children }) {
  return (
    <div className="
      bg-zinc-900
      border border-zinc-800
      rounded-xl
      p-6
      hover:border-zinc-700
      transition
    ">
      {children}
    </div>
  );
}

export default Card;