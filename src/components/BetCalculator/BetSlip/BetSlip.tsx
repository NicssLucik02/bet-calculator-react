import { useState } from "react";
import "./betSlip.scss";
import { getTotalBet } from "../../../utils/utils";
import type { Bet } from "../../../types/types";
import { validateBet } from "../../../utils/validateBet";

type Props = {
  handleAddBet: (amount: string, coefficient: string, type: string) => void;
};

export const BetSlip: React.FC<Props> = ({ handleAddBet }) => {
  const [currentBet, setCurrentBet] = useState<Bet>({
    amount: "",
    coefficient: "",
    typeBet: "",
  });

  console.log(currentBet);
  
  const betTypes = ["Slots", "Poker", "Football", "Basketball", "Tennis"];

  const handleBetSubmission = () => {
    if (!validateBet(
        currentBet.amount,
        currentBet.coefficient,
        currentBet.typeBet,
      )) {
      return;
        }
        
        handleAddBet(
          currentBet.amount,
          currentBet.coefficient,
          currentBet.typeBet,
        );
        setCurrentBet({
          amount: "",
          coefficient: "",
          typeBet: "",
        });
  }

  const handleChangeInput = (
    event:  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, 
    field: string
  ) => setCurrentBet((prev) => ({
          ...prev,
                [field]: event.target.value,
              }));
  
  return (
    <div className="bet-slip">
      <div className="bet-slip__title">
        <img
          src="./src/assets/ticket.svg"
          alt="ticket"
          className="ticket-icon"
        />
        Bet Slip
      </div>
      <form className="bet-slip__form">
        <div>
          <p className="input-label">Bet Amount</p>
          <input
            type="number"
            className="bet-slip__input amount"
            placeholder="0.00"
            value={currentBet.amount}
            onChange={(event) => handleChangeInput(event, "amount")}
          />
        </div>

        <div>
          <p className="input-label">Odds</p>
          <input
            type="number"
            className="bet-slip__input coefficient"
            placeholder="2.50"
            value={currentBet.coefficient}
            onChange={(event) => handleChangeInput(event, "coefficient")}
          />
        </div>

        <div>
          <label className="input-label">Bet Type</label>
          <select
            className="bet-slip__input select"
            value={currentBet.typeBet}
            onChange={(event) => handleChangeInput(event, "typeBet")}
          >
            <option value="" disabled>
              Select Bet type
            </option>
            {betTypes.map((item) => {
              return <option key={item} value={item}>{item}</option>;
            })}
          </select>
        </div>
      </form>
      <div className="bet-slip__total">
        <p className="total-desc">
          Stake:
          <span className="total__amount">{currentBet.amount}</span>
        </p>
        <p className="total-desc">
          Odds:
          <span className="total__coefficient">{currentBet.coefficient}</span>
        </p>
        <hr className="divider" />
        <p className="total-desc">
          Potential win:
          <span className="total">
            {getTotalBet(currentBet.amount, currentBet.coefficient)}
          </span>
        </p>
      </div>
      <button
        className="bet-slip__button"
        onClick={() => {
          handleBetSubmission();
        }}
      >
        Place bet
      </button>
    </div>
  );
};
