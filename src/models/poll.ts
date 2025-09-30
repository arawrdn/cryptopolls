export interface Poll {
  id: string;
  question: string;
  options: string[];
}

export interface Vote {
  pollId: string;
  option: string;
  weight: number;
  txHash?: string;
  status: "pending" | "confirmed" | "failed";
}
