import PropTypes from 'prop-types'; 
import s from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback })=>{
    return (
        <div>
        {options.map((option) => (
				<button className={s.buttons}
                type="button"
                onClick={onLeaveFeedback}
                name={option}
                key={option}
                >
                    {option}
                </button>
        ))}
        </div>
    )
}
FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;