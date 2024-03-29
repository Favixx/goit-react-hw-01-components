import styles from '../css/Statistics.module.css'
import PropTypes from 'prop-types'
export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className="title">{title}</h2>}

            <ul className={styles.stat_list}>
                {stats.map(({ id, label, percentage }) => {
                    return <li key={id} className={styles.item}>
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>
                }
                )}
            </ul>
        </section>
    )
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}
