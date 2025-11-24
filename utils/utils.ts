export const getTotalBet = (amount: string, odd: string) => {
  if (amount !== null && odd !== null) {
    return Number((Number(amount) * Number(odd)).toFixed(2));
  }
};
