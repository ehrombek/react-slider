import React from 'react';
import './slider.css';
import left from './icons/left-arrow.svg';
import right from './icons/right-arrow.svg';

const BtnSlider = ({direction, moveSlide}) => {
    console.log(direction, moveSlide);
    return (
        <>
         <button className={direction === "next" ? 'btn-slide next' : "btn-slide prev"} onClick={moveSlide}>
            <img src={direction === "next" ? right: left } alt="" />    
        </button>   
        </>
    );
};

export default BtnSlider;