const Button = (props) => {
  return (
    <button className="border border-orange-300 rounded-none w-24 h-8  hover:bg-orange-600 hover:text-white font-semibold">
      {props.children}
    </button>
  );
};

export default Button;
