export default function Duration({
  time,
  className,
  text,
}: {
  time: number;
  className?: string;
  text?: string;
}) {
  // map time to be in minutes and seconds 3:49
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const secondsWithZero = seconds < 10 ? `0${seconds}` : seconds;
  const timeInMinutesAndSeconds = `${minutes}:${secondsWithZero}`;
  if (!className) {
    className = "text-2xl text-green-800 my-4";
  }
  if (!text) {
    text = "شاهدت";
  }
  return (
    <div>
      <span className={className}>
        {`        ${text} ${timeInMinutesAndSeconds}
`}{" "}
      </span>
    </div>
  );
}
