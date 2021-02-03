import React from 'react'

import Slider from "react-slick";

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };


    return (
        <div className="">
            <Slider {...settings}>
                <div>
                    <img className='img-fluid' src={'https://dummyimage.com/1200x400/000/fff'} alt='something' />
                </div>
                <div>
                    <img className='img-fluid' src={'https://dummyimage.com/1200x400/000/fff'} alt='something' />
                </div>
                <div>
                    <img className='img-fluid' src={'https://dummyimage.com/1200x400/000/fff'} alt='something' />
                </div>
                <div>
                    <img className='img-fluid' src={'https://dummyimage.com/1200x400/000/fff'} alt='something' />
                </div>
                <div>
                    <img className='img-fluid' src={'https://dummyimage.com/1200x400/000/fff'} alt='something' />
                </div>
                <div>
                    <img className='img-fluid' src={'https://dummyimage.com/1200x400/000/fff'} alt='something' />
                </div>
            </Slider>
        </div>
    )
}

export default Hero
