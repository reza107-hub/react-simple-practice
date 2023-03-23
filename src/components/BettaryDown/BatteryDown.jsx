import React, { useState } from 'react';
import './BatteryDown.css'
const BatteryDown = () => {
    const [battery,setB] = useState(100);
    const BatteryMinus = ()=>{
        
        if(battery===0){
            return
        }else{
            setB(battery-10)
        }
    }
    return (
        <div>
            <p id='battery-percentage'>{battery}</p>
            <button onClick={BatteryMinus} className='bettary' id='battery'>Battery Down</button>
        </div>
    );
};

export default BatteryDown;