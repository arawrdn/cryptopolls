import React from "react";
import { Poll } from "../models/poll";
import { votePoll } from "../services/pollService";

interface Props {
  poll: Poll;
}

export const PollCard: React.FC<Props> = ({ poll }) => {
  const handleVote = async (option: string) => {
    await votePoll(poll.id, option, 0.01); // weight = 0.01 ETH for demo
  };

  return (
    <div>
      <h3>{poll.question}</h3>
      {poll.options.map((opt) => (
        <button key={opt} onClick={() => handleVote(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
};
