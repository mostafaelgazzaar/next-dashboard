import ReactConfetti from "react-confetti";

export default function Confetti() {
  return (
    <div className="flex justify-center">
      <ReactConfetti
        width={1500}
        height={1500}
        numberOfPieces={2000}
        recycle={false}
        gravity={0.1}
        tweenDuration={5000}
        colors={[
          "#f44336",
          "#e91e63",
          "#9c27b0",
          "#673ab7",
          "#3f51b5",
          "#2196f3",
          "#03a9f4",
          "#00bcd4",
          "#009688",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFEB3B",
          "#FFC107",
          "#FF9800",
          "#FF5722",
          "#795548",
        ]}
      />
    </div>
  );
}
