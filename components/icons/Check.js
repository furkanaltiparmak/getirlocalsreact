export default function Check(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 10 7"
      fill="none"
    >
      <path
        d="M9 1L3.5 6L1 3.72727"
        stroke={props.color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
