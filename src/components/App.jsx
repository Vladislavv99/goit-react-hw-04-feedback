import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const key = event.target.name;
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  const options = ['good', 'bad', 'neutral'];
  const totalStats = countTotalFeedback();
  const positiveStats = countPositiveFeedbackPercentage();


    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalStats}
            positivePercentage={positiveStats}
          />
        </Section>
      </div>
    );
  }

export default App;