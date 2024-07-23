import React, { useState } from "react";
import {Card, Avatar, Row, Col, Typography, Tag, Divider, Button, Space, Tooltip} from "antd"
import {ClockCircleOutlined, RightOutlined, UserOutlined, EnvironmentOutlined, StarFilled} from "@ant-design/icons";
import webStyles from '../styles/Website.module.css'
import { YachtIcon2x } from "./WebIcons";
import { IconShip, IconUsers, IconEngine, IconBadgeWc, IconBed, IconJacket } from '@tabler/icons-react';
import i18n from "../locales/i18n";
import { currencyConverse } from "../utils/generals";
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;


const WebsiteYachtCard = ({
    title, 
    description, 
    buttonText, 
    onButtonClick, 
    backgroundImage, 
    yacht, 
    resize=false,
    extraContent= null, 
    showButton= true,
    extraActions= null,
    buttonDisabled = false,
    selectedCurrency,
    ...props
}) => {
    const t = i18n.t;
    const [ show, setSHow ] = useState(false)
    const currency = selectedCurrency
    const currencyExchange =[
        {
            baseCurrency: "USD",
            exchangeRate:18.039734,
            targetCurrency: "MXN"
        },
        {
            baseCurrency:"MXN",
            exchangeRate: 0.055433,
            targetCurrency: "USD"
        }
    ]

    return (
        <div id={`list_card_${yacht?._id}`} className={webStyles.yacht__card} onClick={() => {
            onButtonClick(yacht)
        }} style={{cursor: 'pointer'}}>

            <div>
                <Row gutter={30}>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <div
                            className={webStyles.yacht__card_image}
                            style={{background: `url(${backgroundImage})` }}
                        />
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <div className={webStyles.yacht__card__body}>

                            <>
                                <div style={{minHeight: (showButton && 'calc(100% - 45px)' || '100%')}}>
                                    <Title level={4} className={webStyles.yacht__card_title}>{title}</Title>
                                    <Paragraph className={webStyles.yacht__card_price}
                                               style={{
                                                   color: 'var(--text-dark-black)',
                                               }}>
                                        {description}
                                    </Paragraph>
                                    {resize ? (
                                        <div style={{marginBottom:15, display:'flex', flexDirection:'row'}}>
                                            <span style={{fontSize:12}}>{t('desde_price_text')}</span>
                                            <span style={{color:'#00536A', fontSize:20, fontWeight:'bold', marginRight:5, marginLeft:5}}>${Math.ceil(currencyConverse(yacht?.currency, yacht?.price, currency, currencyExchange))}</span>
                                            <span style={{fontSize:12}}>{currency}</span>
                                        </div>): null}
                                    <div>
                                    {yacht?.details?.size ? <Tooltip title={t("yachtme_size")}>
                                    <Space style={{marginRight:'12px'}}>
                                    <YachtIcon2x resize={resize} />
                                    {/* <IconShip   style={{height: 16, marginTop: '2px', marginRight:'-8px'}} /> */}
                                    {yacht?.details?.size} ft
                                    </Space></Tooltip> : (
                                        <Tooltip title={t("yachtme_size")}>
                                        <Space style={{marginRight:'12px'}}>
                                        <YachtIcon2x resize={resize} />
                                        {/* <IconShip   style={{height: 16, marginTop: '2px', marginRight:'-8px'}} /> */}
                                        { yacht?.size} ft
                                        </Space></Tooltip>
                                    )}
                                    {yacht?.details?.capacity ? <Tooltip title={t("yachtme_capacity")}>
                                    <Space>
                                    <IconUsers style={{height: resize ? 20 : 24, marginTop: '2px', marginRight:'-8px', color:'var(--yach-primary1)'}} /> {yacht?.details?.capacity} pax
                                    </Space></Tooltip> : (
                                        <Tooltip title={t("yachtme_capacity")}>
                                    <Space>
                                    <IconUsers style={{height: resize ? 20 : 24, marginTop: '2px', marginRight:'-8px', color:'var(--yach-primary1)'}} /> {yacht?.capacity} pax
                                    </Space></Tooltip>
                                    )}
                                    </div>
                                    <Divider className={'mt-4 green-divider'}/>
                                    <div>
                                    {extraContent
                                    }</div>                                    
                                </div>
                                <div >{/* className={webStyles.yacht__card__actions} */}
                                    {/* {showButton && <Button className={['btn btn-primary']}
                                            disabled={buttonDisabled}
                                            onClick={() => {
                                                onButtonClick(yacht)
                                            }}>
                                        {buttonText}
                                    </Button>
                                    } */
                                    /* {yachtData?.yachtCost}{" "} Math.ceil(currencyConverse(yachtData?.currency, yachtData?.yachtCost, currency.id, currencyExchange))
                      {currency?.code} */}
                                    
                                    </div>
                                    <div>
                                    {yacht?.details?.engines > 0 ? <Tooltip title={t("yachtme_engines")} placement="bottom"><Space style={{marginRight:'12px'}}>
                                    <IconEngine style={{height: 20, marginTop: '2px', marginRight:'-8px'}} />{yacht?.details?.engines }
                                    </Space></Tooltip> : yacht?.engines > 0 ? <Tooltip title={t("yachtme_engines")} placement="bottom"><Space style={{marginRight:'12px'}}>
                                    <IconEngine style={{height: 20, marginTop: '2px', marginRight:'-8px'}} />{yacht.engines}
                                    </Space></Tooltip>:null}
                                    {yacht?.details?.bathrooms > 0  ?  <Tooltip title={t("yachtme_bathrooms")} placement="bottom"><Space style={{marginRight:'12px'}}>
                                    <IconBadgeWc   style={{height: 20, marginTop: '2px', marginRight:'-8px'}} />{yacht?.details?.bathrooms}
                                    </Space></Tooltip>: yacht?.bathrooms > 0 ? <Tooltip title={t("yachtme_bathrooms")} placement="bottom"><Space style={{marginRight:'12px'}}>
                                    <IconBadgeWc   style={{height: 20, marginTop: '2px', marginRight:'-8px'}} />{yacht.bathrooms}
                                    </Space></Tooltip> : null}
                                    {yacht?.details?.cabins > 0 ? <Tooltip title={t("yachtme_cabins")} placement="bottom"><Space style={{marginRight:'12px'}}>
                                    <IconBed   style={{height: 20, marginTop: '2px', marginRight:'-8px'}} />{yacht?.details?.cabins}
                                    </Space></Tooltip>: yacht?.cabins > 0 ? <Tooltip title={t("yachtme_cabins")} placement="bottom"><Space style={{marginRight:'12px'}}>
                                    <IconBed   style={{height: 20, marginTop: '2px', marginRight:'-8px'}} />{yacht.cabins}
                                    </Space></Tooltip>:null}
                                    {yacht?.details?.lifevest > 0 ? <Tooltip title={t("yachtme_lifevest")} placement="bottom"><Space >
                                    <IconJacket   style={{height: 20, marginTop: '2px', marginRight:'-8px'}} />{yacht?.details?.lifevest}
                                    </Space></Tooltip> : yacht?.lifevest > 0 ? <Tooltip title={t("yachtme_lifevest")} placement="bottom"><Space >
                                    <IconJacket   style={{height: 20, marginTop: '2px', marginRight:'-8px'}} />{yacht.lifevest}
                                    </Space></Tooltip> : null }
                                    {/* icon={<FontAwesomeIcon icon={faEnvelopeCircleCheck} style={{height: 21, marginTop: '5px'}}/>} */}
                                    {extraActions}
                                </div>
                            </>
                        </div>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </div>

        </div>
    )
}

export default WebsiteYachtCard