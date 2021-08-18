import React from 'react';

export const NumberButton = ({value}) => {
    return (
        <input type='number' pattern='[0-9]' min='1' max='9' placeholder='1' number={value}/>
    );
}