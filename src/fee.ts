import { IdlAccounts } from "@coral-xyz/anchor";
import { LimitOrder } from "@jup-ag/limit-order-sdk";
import { PublicKey } from "@solana/web3.js";

const USD_STABLE_PAIR = [
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDC
  "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", // USDT
  "USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX", // USDH
  "A9mUU4qviSctJVPJdBJWkb28deg915LYJKrzQ19ji3FM", // USDCet
  "Dn4noZ5jgGfkntzcQSUZ8czkreiZ1ForXYoV2H8Dm7S1", // USDTet
  "Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS", // PAI
  "7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT", // UXD
];

const SOL_STABLE_PAIR = [
  "So11111111111111111111111111111111111111112", // SOL
  "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1", // bSOL
  "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj", // stSOL
  "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So", // mSOL
  "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn", // jitoSOL
];

export const getTakerFee = (
  inputMint: PublicKey,
  outputMint: PublicKey,
  fee: IdlAccounts<LimitOrder>["fee"]
) => {
  const isUsdStable =
    USD_STABLE_PAIR.includes(inputMint.toString()) &&
    USD_STABLE_PAIR.includes(outputMint.toString());
  const isSolStable =
    SOL_STABLE_PAIR.includes(inputMint.toString()) &&
    SOL_STABLE_PAIR.includes(outputMint.toString());

  if (isUsdStable || isSolStable) {
    return fee.takerStableFee.toNumber();
  } else {
    return fee.takerFee.toNumber();
  }
};
