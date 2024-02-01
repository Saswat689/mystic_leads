export default function Button(props) {
  const Icon = props.icon;
  return (
    <button
      onClick={props.onClick}
      className={`bg-amber-700 ${props.className} transition-all cursor-pointer outline-none border-none hover:bg-amber-800 text-white font-semibold py-4 px-4 text-[16px] border-b-4 rounded`}
    >
      {props.icon ? (
        <div className="flex items-center gap-x-2">
          <Icon />
          <span>{props.text}</span>
        </div>
      ) : (
        <span>{props.text}</span>
      )}
    </button>
  );
}
