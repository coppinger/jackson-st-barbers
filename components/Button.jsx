export default function Button(props) {
  return (
    <a
      className={`w-fit px-[26px] py-4 border-2 font-cevirnobold uppercase tracking-widest transform transition-all duration-200 ease-linear hover:border-opacity-40 hover:bg-transparent ${
        props.calltoaction ? "bg-[#358547] border-none " : ""
      }  ${props.dark ? "border-black" : "border-white"}`}
      href={props.url}
    >
      {props.text}
    </a>
  );
}
