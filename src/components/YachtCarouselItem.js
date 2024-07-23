import webStyles from "../styles/Website.module.css";
import React from "react";
import {Col} from 'antd';

const YachtCarouselItem = ({key, onClickItem,  yacht ,YatchCarouselItemImage, YatchCarouselItemFooter, styles}) => {
    return(
        <div key={key} className={webStyles.carrousel__fondo}
            style={styles || {
                fontWeight: '800',
            }} onClick = { () => onClickItem(yacht) }>
            <Col>
            {YatchCarouselItemImage}
            {YatchCarouselItemFooter}
            </Col>
        </div>
   )
}
export default YachtCarouselItem
