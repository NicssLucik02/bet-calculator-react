export function validateBet(
  amount: string,
  coefficient: string,
  typeBet: string,
) {
  if (isNaN(Number(amount)) || Number(amount) <= 0) {
    alert("Please enter a valid number");
  }

  if (isNaN(Number(coefficient)) || Number(coefficient) <= 0) {
    alert("Please enter a valid number");
  }

  if (!amount || !coefficient || !typeBet) {
    alert("Please fill in all bid fields!");
    return false;
  }

  if (Number(amount) <= 0) {
    alert("The bet amount must be greater than 0");
    return false;
  }

  if (Number(coefficient) <= 0) {
    alert("The bet odd must be greater than 0");
    return false;
  }

  return true;
}
