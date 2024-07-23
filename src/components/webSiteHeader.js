import React, {useContext, useEffect, useState} from "react"
import {Layout, Menu, Row, Col, Image, Dropdown, Typography, Form, Tabs, Input, Button, Modal, message, Drawer, Space, Tooltip, notification,Switch} from "antd"
import webStyles from '../styles/Website.module.css';
import i18n from "../locales/i18n";
import Logo from '../assets/Logo.png'
import { useTranslation } from 'react-i18next';
import usa from '../assets/flagUSA.png';
import mxn from '../assets/flagMX.png'

import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';



const { Text, Title } = Typography
const { Header } = Layout
const { Item, SubMenu } = Menu;
const { TabPane } = Tabs;

const WebSiteHeader = ({currentLang, onChangeLanguage, currentCurrency, currenciesList, onChangeCurrency, hideCurrency, languaje, currency, resize,...props}) => {
    //const t = i18n.t;
    const { t, i18n } = useTranslation();
    const [langiaje, setLanguaje] = useState(false)
    const [showMainMenu, setMainMenu] = useState(false)
    const [showCurrency, setCurrency] = useState(false)


    useEffect(() => {
        setLanguaje(i18n.language === 'en')
        getCurrencies()
    },[])

    const getCurrencies = () =>{
        let currencies = localStorage.getItem('currencies');
        //let minutes = moment().diff(currencyTimestamp, 'minutes');
        //if (currencyTimestamp === null || minutes >= 1440) {

        //}
    }
    
    const changeLanguage = (language) => {
        setLanguaje(!langiaje)
        i18n.changeLanguage(language);
    }

    const MainMenu = () =>(
        <div style={{display:'flex',flexDirection:'row',width:200}}>
        <Menu className={webStyles['header__menu-menu']}
              mode="vertical"
              onClick={ ({ key }) => {
                console.log('key',key)
                  //if(key === 'en' || key === 'es_mx'){
                      changeLanguage(key)
                      setMainMenu(false)
                  //}
              } }
              //items={items}
              
        >
            <Menu.Item key="en"  >
            <img src={usa} style={{width:15, height:15, objectFit:'contain'}}/> English
            </Menu.Item>
            <Menu.Item key="es" >
            <img src={mxn} style={{width:15, height:15, objectFit:'contain'}}/> Español
            </Menu.Item>
        </Menu>

        </div>
    )

    const MenuCurrency = () =>(
        <div style={{display:'flex',flexDirection:'row',width:200}}>
        <Menu className={webStyles['header__menu-menu']}
              mode="vertical"
              onClick={ ({ key }) => {
                console.log('key',key)
                onChangeCurrency(key)
                setCurrency(false)
                  //if(key === 'en' || key === 'es_mx'){
                      //changeLanguage(key)
                      //setMainMenu(false)
                  //}
              } }
              //items={items}
              
        >
            <Menu.Item key="USD"  >
             USD
            </Menu.Item>
            <Menu.Item key="MXN" >
             MXN
            </Menu.Item>
        </Menu>

        </div>
    )

    

    return(
        <Header className={webStyles.header}>
          
              <div className={webStyles.containerHeader}>
                  <Row justify={'center'} align={'center'}>
                      <Col span={resize ? 14 : 15} >
                         <div className={webStyles.header__logo} onClick={()=>{console.log('press')}} style={{cursor:'pointer'}}>
                            <img src={Logo}/>
                        </div>
                      </Col>
                        <Col span={ resize ? 8 :2}  >
                            <Tooltip title={t('yachtme_select_languaje')}>
                                <img style={{cursor:'pointer'}}src={i18n.language === 'es' ? mxn : usa } onClick={() => {
                                    setMainMenu(!showMainMenu);}}/>

                            </Tooltip>
                            {showMainMenu ? <MainMenu /> : null}

                        </Col>
                      
                        <Col span={resize ? 2 : 2} >
                            <Tooltip title={t('yachtme_select_currency')}>
                            <span style={{cursor:'pointer', color:'white',position:'relative',bottom:10}} onClick={() => {
                                    setCurrency(!showCurrency);}}>${currency}</span>

                            </Tooltip>
                                {showCurrency ? <MenuCurrency /> : null}
                        </Col>
                  </Row>
              </div>
      </Header>
    )
}

export default WebSiteHeader