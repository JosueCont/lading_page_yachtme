import React, {useState, useEffect} from 'react'
import { Button, Col, Row, Modal, Typography, Image } from "antd";
import i18n from '../locales/i18n';
import styled from 'styled-components';
import LogoAzul from '../assets/LogoAzulYCTME.png'
import appStore from '../assets/AppStore.png';
import playStore from '../assets/GooglePlay.png';


const {Title} = Typography;


const StyleLandingPageModal = styled(Modal)`
  .ant-modal-content {  
    background: linear-gradient(180deg,rgba(122,255,210,1) 0%,rgba(69,203,201,1) 0%,rgba(56,190,199,1) 0%,rgba(39,173,196,1) 0%,rgba(0,134,190,1) 34%,rgba(0,134,190,1) 100%) !important;
    border: 0;
    box-shadow: none;
    pointer-events: auto;
   
    display: flex !important;
    justify-content: center;
    border-radius: 20px; 
    position: relative;
    top: 100px;
    height: 350px;
  }
 
  .ant-modal-body {
    padding-top: 22px;
    font-size: 14px;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 
`;

const ModalLandigPage = (visible) => {
    const t = i18n.t;

    return(
        <StyleLandingPageModal 
            title={null}
            open={visible.visible}
            onOk={null}
            onCancel={null}
            closable={false}
            footer={null}>

                <>
                    <div 
                        style={{
                            height:60,width:60, backgroundColor:'white', 
                            borderRadius:30, justifyContent:'center',
                            alignItems:'center', position:'absolute', top:-30, 
                            borderWidth:10,borderColor:'white'}}>
                        <img
                            src={LogoAzul}
                            style={{
                                height:'100%',
                                width:'100%',
                                objectFit:'contain',
                                zIndex:2,
                            }}/>
                    </div>  
                    <span style={{fontSize:15, textAlign:'center', marginBottom:10}}>{t('yachtme_experience')}</span>

                    <span><strong>{t('yachtme_download_app')}</strong></span>

                    <div
                        style={{
                          paddingTop: '25px',
                          height: '80px',
                        }}>
                          <a href={'https://play.google.com/store/apps/details?id=com.yachtme.app'} target="_blank">
                        <Image
                          preview={false}
                          src={playStore}
                          style ={{}}
                        />
                        </a>
                    </div>

                    <div
                      style={{
                        height: '80px',
                      }}>
                      <a href={'https://apps.apple.com/mx/app/yachtme/id1673790473'} target="_blank">
                      <Image
                        preview={false}
                        src={appStore}
                        style ={{}}
                      />
                      </a>
                    </div>

                    <span style={{color:'white'}}><a href='https://www.yachtme.mx' target='_blank'>{t('yachtme_web')}</a></span>
                </>
                
        </StyleLandingPageModal>
    )
}

export default ModalLandigPage;