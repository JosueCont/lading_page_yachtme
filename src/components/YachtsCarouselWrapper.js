import React, { useEffect } from "react";
import Slider from "react-slick";
import webStyles from '../styles/Website.module.css'
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import GlobalStyles from "../styles/gobalStyles";
import '../styles/slick.css'
const YachtsCarouselWrapper = ({...props}) => {



    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
          {...props}
          className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === 0 ? true : false}
          type="button"
        >
          <div><LeftOutlined size={32} color={'var(--text-white)'}/></div>
        </button>
      );
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
          {...props}
          className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === slideCount - 1 ? true : false}
          type="button"
        >
          <div><RightOutlined size={32} color={'var(--text-white)'}/></div>
        </button>
      );

    const settings = {
        speed: 500,
        slidesToShow: props.mytrips? 1 : 1,
        slidesToScroll: 1,
        autoplay: true,
        variableWidth:true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    variableWidth:true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth:true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (<>
        <div className={`${webStyles.carousel_recommended}`}>
            <div className={'slick-slider-container'}>
                <Slider {...settings}>
                    {props.children}
                </Slider>
            </div>
        </div>

    </>);
}

export default YachtsCarouselWrapper;
