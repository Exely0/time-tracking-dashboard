import iconWork from "../time-tracking-dashboard-main/images/icon-work.svg"
import iconPlay from "../time-tracking-dashboard-main/images/icon-play.svg"
import iconExercise from "../time-tracking-dashboard-main/images/icon-exercise.svg"
import iconSocial from "../time-tracking-dashboard-main/images/icon-social.svg"
import iconStudy from "../time-tracking-dashboard-main/images/icon-study.svg"
import iconSelfCare from "../time-tracking-dashboard-main/images/icon-self-care.svg"

import data from "../time-tracking-dashboard-main/data.json"
import React, { useState, useEffect } from 'react';

const categoryCollections = {
    icon: {
      work: iconWork,
      play: iconPlay,
      exercise: iconExercise,
      social: iconSocial,
      study: iconStudy,
      selfCare: iconSelfCare,
    },
    category: {
      work: "Work",
      play: "Play",
      exercise: "Exercise",
      social: "Social",
      study: "Study",
      selfCare: "Self Care",
    },
    id: {
      work: 0,
      play: 1,
      exercise: 3,
      social: 4,
      study: 2,
      selfCare: 5,
    },
    color: {
      work: "#FD8C64",
      play: "#56C2E6",
      exercise: "#4BCF83",
      social: "#7235D1",
      study: "#FF5E7D",
      selfCare: "#F1C75B",
    },
};

function Card( {category, timeframe} ) {

    const iconPath = categoryCollections.icon[category] || null;

    const [hours, setHours] = useState("");
    const [previous, setPrevious] = useState("");

    useEffect (() => { 

        console.log(timeframe)

        switch(timeframe) {
            case "Daily":
                setHours(data[categoryCollections.id[category]]?.timeframes?.daily?.current);
                setPrevious("Last Day - " + data[categoryCollections.id[category]]?.timeframes?.daily?.previous + "hrs");
                break;
            case "Weekly":
                setHours(data[categoryCollections.id[category]]?.timeframes?.weekly?.current);
                setPrevious("Last Week - " + data[categoryCollections.id[category]]?.timeframes?.weekly?.previous + "hrs");
                break;
            case "Monthly":
                setHours(data[categoryCollections.id[category]]?.timeframes?.monthly?.current);
                setPrevious("Last Month - " + data[categoryCollections.id[category]]?.timeframes?.monthly?.previous + "hrs");
                break;
            default :
                break;
        }

    }, [timeframe, category])

    return (
      <div className={` grid grid-rows-4 rounded-xl max-w-sm h-48 md:h-60`} style={{ backgroundColor: categoryCollections.color[category] }}
      >
        <div className=" flex flex-row-reverse px-8 overflow-hidden">
            <img className=" scale-125" src={iconPath} alt="illustration"/>
        </div>
        <div className=" flex justify-between items-center bg-[#1E204C] py-6 text-lg row-span-4 rounded-xl px-8">
            <div className=" space-y-6">
                <div className=" text-white font-semibold text-lg tracking-wide">
                    {categoryCollections.category[category]}
                </div>
                <div className=" text-3xl text-white">
                    {hours}hrs
                </div>
                <div className=" text-slate-300 hidden md:block">
                    {previous}
                </div>
            </div>
            <div className=" text-right space-y-6">
                <div className=" text-slate-300 font-semibold text-lg tracking-wide hover:cursor-pointer hover:text-white">
                    ...
                </div>
                <div className=" text-slate-300 md:hidden">
                    {previous}
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  