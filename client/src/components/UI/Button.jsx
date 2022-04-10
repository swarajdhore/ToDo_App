function Button(props) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className="justify-end bg-green-500 py-2 px-4 text-sm text-white font-bold rounded border border-green focus:outline-none focus:border-green-200"
    >
      {props.children}
    </button>
  );
}

export default Button;
