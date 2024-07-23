import Reac from "react";
import {Image} from "antd";
import React from "react";
import Loading from '../assets/Logo_Loading-2.gif'

const Loader = ()=>{
    return (
        <div style={{ textAlign: 'center', height:'100vh', background:'var(--bg-gradient)', display:'flex', alignItems:'center', justifyContent:"center"}}>
            <Image
                src={Loading}
                width={200}
                preview={false}
            />
        </div>
    )
}
export default Loader