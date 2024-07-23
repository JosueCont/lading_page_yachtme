import React, {useContext, useEffect} from "react"
import {Layout, Menu, Row, Col} from "antd"
import webStyles from '../styles/Website.module.css'
import i18n from "../locales/i18n";

const { Footer} = Layout
const { Item, SubMenu } = Menu;

const WebsiteFooter = ({...props}) => {

    const t = i18n.t;

    const mainMenuItems = [

        {
            label: 'Contacto',
            key: 'contact-us',
            icon: '',
            disabled: false,
        },
        {
            label: 'Mis viajes',
            key: 'my-trips',
            icon: '',
            disabled: false,
        },
    ];


    return (<>
        <style global jsx>{`
      `}</style>

        <Footer className={webStyles.footer}>
            <div className={webStyles.footer__list}>
                <a className={webStyles.footer__items} onClick={() =>props.setLandingPage(true)}>{t('websiteFooter_terms_conditions')}</a>
                <a className={webStyles.footer__items} onClick={() =>props.setLandingPage(true)}>{t('websiteFooter_privacy_policies')}</a>
                <a className={webStyles.footer__items} onClick={() =>props.setLandingPage(true)}>{t('websiteFooter_cancellation_policies')}</a>
               
            </div> 
        </Footer>
    </>)
}
export default WebsiteFooter
