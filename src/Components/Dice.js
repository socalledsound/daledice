import React from 'react';
import '../Dice.css';

const Dice = ({face, rolling, isPast}) => {
    return (
        
        <i className={`Dice fas fa-dice-${face} ${rolling ? "rolling" : ''} ${isPast ? "dice-history" : ''}`} ></i>
    );
};

export default Dice;