import React from "react";
import {Tag} from "antd"
import {StarFilled} from "@ant-design/icons";

const RateTag = ({rate, fontSize=16, squaredLeft= false, style={}, className}) =>{
    return(
        <Tag className={`rate-tagv2 ${(squaredLeft ? 'tag-squared-left' : '')} ${className}`} style={style}>
            <span style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:fontSize}}>
                <span className={'mr-1'}>{rate}</span>
                <StarFilled style={{fontSize: (fontSize-(fontSize/3))}} />
            </span>
        </Tag>
    )
}

export default RateTag
