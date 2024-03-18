import imageJeremy from "../time-tracking-dashboard-main/images/image-jeremy.png"

import React, { useState } from 'react';

const intervals = ["Daily", "Weekly", "Monthly"]

function Profile( {onTimeframeChange} ) {

    const [selectedTimeframe, setSelectedTimeframe] = useState("Weekly");

    const handleTimeframeClick = (timeframe) => {
        setSelectedTimeframe(timeframe);
        onTimeframeChange(timeframe);
    };

    return (
      <div className=" grid grid-rows-3 bg-[#1E204C] rounded-xl max-w-sm md:row-span-2">
        <div className=" row-span-2 bg-[#5847EA] rounded-xl flex md:flex-col gap-10 px-8 py-6">
            <div className=" basis-1/4 flex items-center justify-center md:w-20">
                <img src = {imageJeremy} alt = "photo portrait de Jeremy"/>
            </div>
            <div className=" flex flex-col justify-center text-slate-300">
                <div>
                    Report for
                </div>
                <div id="name" className=" text-2xl tracking-wide text-white md:text-5xl">
                    Jeremy Robson
                </div>
            </div>
        </div>
        <div className=" flex md:flex-col justify-between items-center text-[#606396] px-8 pt-4 pb-4 text-lg">

            {intervals.map((interval) => (
            <div onClick={(() => handleTimeframeClick(interval))} className={`${selectedTimeframe === interval ? "!text-green-600" : ''} px-4 py-2 hover:scale-110 hover:cursor-pointer hover:text-white transition-all`} key={interval}>{interval}</div>
            ))}

        </div>
      </div>
    );
  }
  
  export default Profile;
  