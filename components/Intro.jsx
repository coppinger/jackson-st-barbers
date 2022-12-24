export default function Intro(props) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className={`text-center ${props.dark ? "text-dark" : "text-white"}`}>
        {props.title}
      </h2>
      <p
        className={`text-center ${
          props.dark ? "text-dark-gray" : "text-off-white"
        }`}
      >
        {props.text}
      </p>
    </div>
  );
}
