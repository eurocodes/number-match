import { useEffect, useState } from 'react';
import { utils } from '../helpers/Utils';

export const useGameState = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        if(timeLeft > 0 && availableNums.length > 0) {
        const timerId = setTimeout(() => {
            setTimeLeft(timeLeft-1)
        }, 1000);
        return () => clearTimeout(timerId);
    }
    })

    const setGameState = (newCandidateNums) => {
        if (utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
        );
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    return {stars, availableNums, candidateNums, timeLeft, setGameState};
}