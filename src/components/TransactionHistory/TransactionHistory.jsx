import { TransactionItem } from "./TransactionItem";
import PropTypes from 'prop-types';
import css from './transaction.module.css';

export const TransactionHistory = ({ items }) => (
    <table className={css['transaction-history']}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            id={item.id}
          />
        ))}
    
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};