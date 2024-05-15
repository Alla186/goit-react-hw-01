import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th className={css.column}>Type</th>
            <th className={css.column}>Amount</th>
            <th className={css.column}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr className={css.line} key={item.id}>
              <td className={css.value}>{item.type}</td>
              <td className={css.value}>{item.amount}</td>
              <td className={css.value}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TransactionHistory;
