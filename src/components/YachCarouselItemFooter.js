import webStyles from "../styles/Website.module.css";
import React from "react";

const YachtCarouselItemFooter = ({title, description}) => {
    return(<>
        <div className={webStyles.carrousel__texto}>
            <span style={{color:'var(--yach-primary2)'}}>{title}</span><br/>
            <span  style={{marginBottom:'0',fontWeight:'lighter',fontSize:'14px'}}>{description}</span>
        </div>
    </>)
}
export default YachtCarouselItemFooter
