import { appkit } from "./appkit";
import { Poll, Vote } from "../models/poll";

export async function votePoll(pollId: string, option: string, weight: number): Promise<Vote> {
  try {
    const tx = await appkit.sendTransaction({
      to: "0xPollContractAddressHere",
      value: weight,
      token: "ETH"
    });

    return { pollId, option, weight, txHash: tx.hash, status: "pending" };
  } catch {
    return { pollId, option, weight, status: "failed" };
  }
}
