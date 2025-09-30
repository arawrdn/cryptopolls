import React from "react";
import { WalletConnectButton } from "../components/WalletConnectButton";
import { PollCard } from "../components/PollCard";
import { Poll } from "../models/poll";

const polls: Poll[] = [
  { id: "poll1", question: "Favorite crypto?", options: ["ETH", "BTC", "SOL"] },
  { id: "poll2", question: "Best Layer 2?", options: ["Arbitrum", "Optimism", "zkSync"] },
];

export const HomePage = () => {
  return (
    <div>
      <h1>CryptoPolls</h1>
      <WalletConnectButton />
      {polls.map((poll) => (
        <PollCard key={poll.id} poll={poll} />
      ))}
    </div>
  );
};
