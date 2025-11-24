import "./betHistory.scss";
import type { Bet } from "../../../types/types";
import { getTotalBet } from "../../../utils/utils";

type Props = {
  history: Bet[];
};

export const BetHistory: React.FC<Props> = ({ history }) => {
  return (
    <div className="bet-history">
      <div className="bet-history__title">🎲 Bet History</div>
      <table className="bet-history__table">
        <thead className="history-table__header">
          <tr className="history-table__tr">
            <th>Date</th>
            <th>Type</th>
            <th>Stake</th>
            <th>Odds</th>
            <th>Potential</th>
          </tr>
        </thead>
        <tbody>
          {history.map((bet) => {
            return (
              <tr>
                <td>{new Date().toLocaleDateString()}</td>
                <td>{bet.typeBet}</td>
                <td>{bet.amount}</td>
                <td>{bet.coefficient}</td>
                <td>{getTotalBet(bet.amount, bet.coefficient)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
