import PropTypes from 'prop-types';
import s from './Statistics.modules.css'
import Notification from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    if (total === 0){
        return <Notification message="There is no feedback" />;
    }
    return (
        <div>
        <p className={s.statisticTitle}>Good: {good}</p>
        <p className={s.statisticTitle}>Neutral: {neutral}</p>
        <p className={s.statisticTitle}>Bad: {bad}</p>
        <p className={s.statisticTitle}>Total: {total}</p>
        <p className={s.statisticTitle}>Positive Feedback: {positivePercentage}%</p>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
 }

export default Statistics;
