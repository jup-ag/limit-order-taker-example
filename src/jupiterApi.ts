import { PublicKey } from "@solana/web3.js";

export interface QuoteResponse {
  inputMint: string;
  inAmount: string;
  outputMint: string;
  outAmount: string;
  otherAmountThreshold: string;
  swapMode: string;
  slippageBps: number;
  platformFee: string;
  priceImpactPct: string;
  routePlan: any;
  contextSlot: number;
  timeTaken: number;
}

export const getQuote = async (
  fromMint: PublicKey,
  toMint: PublicKey,
  amount: number | string
): Promise<QuoteResponse> => {
  return fetch(
    `https://quote-api.jup.ag/v6/quote?outputMint=${toMint.toBase58()}&inputMint=${fromMint.toBase58()}&amount=${amount}&slippageBps=0`
  )
    .then((response) => response.json())
    .catch((err) => {
      throw err;
    });
};

export const getSwapIx = async (user: PublicKey, quote: any) => {
  return fetch(`https://quote-api.jup.ag/v6/swap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quoteResponse: quote,
      userPublicKey: user.toBase58(),
      computeUnitPriceMicroLamports: "auto",
    }),
  })
    .then((response) => response.json())
    .catch((err) => {
      throw err;
    });
};
