import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem';
import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css['stat-list']}>
        {stats.map(stat => (
          <StatisticItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
            id={stat.id}
          />
        ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};