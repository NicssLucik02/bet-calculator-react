import { useEffect, useState } from "react";
import { BetHistory } from "./BetHistory/BetHistory";
import { BetSlip } from "./BetSlip/BetSlip";
import type { Bet } from "../../types/types";
import { getTotalBet } from "../../utils/utils";

export const BetCalculator = () => {
  const [history, setHistory] = useState<Bet[]>([]);
  useEffect(() => {
    const loadHistory = async () => {
      const stored = localStorage.getItem("BetHistory");
      if (stored) {
        setHistory(JSON.parse(stored));
      }
    };
    loadHistory();
  }, []);

  const handleAddBet = (amount: string, coefficient: string, type: string) => {
    const newBet = {
      date: new Date().toLocaleDateString(),
      amount: amount,
      coefficient: coefficient,
      typeBet: type,
      total: getTotalBet(amount, coefficient),
    };
    setHistory((prev) => {
      const updatedHistory = [...prev, newBet];
      localStorage.setItem("BetHistory", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  return (
    <section className="bet-calculator">
      <BetSlip handleAddBet={handleAddBet} />
      <BetHistory history={history} />
    </section>
  );
};
