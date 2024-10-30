import React, { useEffect } from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply,devideTheFirstNumberByTheSecondNumber as divide } from '../../utility/calculate';
// import add from '../../utility/calculate';
const Sunglass = () => {


    const first = 55;
    const second = 57;
    const sum = add(first,second)
    const mult =multiply(first,second)
const bhhag = divide(first,second)


useEffect



    return (
        <div>
         
        </div>
    );
};

export default Sunglass;