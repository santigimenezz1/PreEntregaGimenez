import React from "react";
import ComputerIcon from '@mui/icons-material/Computer';
import  '../MiniSection/minisection.css'


const MiniSection = ({icon,section})=>{
    return (
        <div className="grid-section">
        <div className="cointainer-miniSection">
         <div className="icon">
         {icon}
         </div>
        <h2>{section}</h2>
        </div>
        </div>
    )
}

export default MiniSection