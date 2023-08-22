# Limit Order Taker Example

This is a simple limit order taker example that utilise Jupiter quoting API to execute Jupiter Limit Order.

# Getting started
1. Populate these environment variable to `.env` file
```
RPC_ENDPOINT=<private rpc endpoint>
PRIVATE_KEY=<wallet private key>
```
2. Install dependencies
```
pnpm install
```
3. Start the bot
```
pnpm start
```

# How it work?
1. Get all the open orders from onchain, filter and sort the orders according to the price.
2. Get quote from Jupiter Swap API and check whether the order is profitable to execute.
3. Bundle Jupiter Swap Ix with Limit Order Ix to execute the order.