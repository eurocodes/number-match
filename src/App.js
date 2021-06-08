import { useState } from 'react';
import { utils } from './helpers/Utils';
import { StarsDisplay } from './components/StarsDisplay';
import { PlayNumber } from './components/PlayNumber';
import './App.css';

const App = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const numberStatus = number => {
    if (!availableNums.includes(number)) {
      return "used";
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong? "wrong" : "candidate";
    }
    return "available";
  };

  const onNumberClick = (numbers, currentStatus) => {
    if (currentStatus === "used") {
      return;
    }
    const newCandidateNums = candidateNums.concat(numbers);
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    }else{
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      // redraw stars from what is available
      setStars(utils.randomSumIn(availableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  }
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay stars={stars} />
        </div>
        <div className="right">
          {
            utils.range(1, 9).map(number =>
              <PlayNumber
                status={numberStatus(number)}
                number={number}
                key={number}
                onClick={onNumberClick}
              />
            )
          }
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default App;
