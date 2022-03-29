import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title} </h2>}

      <ul className={styles.statlist}>
        {stats.map(stat => (
          <li
            className={styles.item}
            key={stat.id}
            style={{
              backgroundColor: getRandomHexColor(),
              width: `calc(100% / ${stats.length})`,
            }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  stat: PropTypes.object,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
