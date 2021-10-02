import React from 'react';
import './Notifications.css';
export default function Notifications(value) {
    return (
        <div className="BackGround">
           <div className="Font"> {value.notiftitle}: {value.notifcontent} </div>
        </div>
        
    )
}
