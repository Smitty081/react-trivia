// src/components/Scoreboard.tsx
interface ScoreboardProps {
  score: number;
}

const Scoreboard = ({ score }: ScoreboardProps) => {
  return (
    <div>
      <h3>Score: {score}</h3>
    </div>
  );
};

export default Scoreboard;
