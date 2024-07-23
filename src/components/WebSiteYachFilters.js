import React, {useEffect, useState} from 'react';
import {Button, Col, Row, Form, Spin, DatePicker, Select, Slider, Tag} from 'antd';
import webStyles from '../styles/Website.module.css';
import { AnchorIcon, BuildingIcon, CalendarIcon, YachtIcon } from './WebIcons';
import i18n from '../locales/i18n';
import moment from 'moment';

const { Option } = Select;
const { RangePicker } = DatePicker;

const WebFilters = ({  priceInit, changeLanding}) => {
    const t = i18n.t;
    const [ costsLimit, setCostsLimit] = useState([priceInit[0]===priceInit[1]?0:priceInit[0], priceInit[1]])
    const [ marksCosts, setMarksCosts] = useState({
        0: '$0',
        1000: '$1000'
    })
    const [ costs, setCosts] = useState([priceInit[0]===priceInit[1]?0:priceInit[0], priceInit[1]])
    const [landigPage, setLandigPage] = useState(false)

      useState(() => {
        let marksCost = {}
        if (priceInit[0] === priceInit[1]){
          marksCost[0] = `$0`
          marksCost[priceInit[1]] = `$${priceInit[1]}`
        }else{
          marksCost[priceInit[0]] = `$${priceInit[0]}`
          marksCost[priceInit[1]] = `$${priceInit[1]}`
        }
        setMarksCosts(marksCost)
      },[])

    return(
        <div className={webStyles.contentFilters}>
            <span style={{color:'white'}}>{t('city')}</span>
            <div className={webStyles.contCiudad}>
                <BuildingIcon style={{marginRight: 4, position:'relative', top:0,rigth:100,}}/>
                <span style={{color: 'var(--yach-primary1)'}}>Cancun</span>
            </div>
            <span  style={{color:'white'}}>{t('where')}</span>
            <div className={webStyles.contCiudad}>
                <AnchorIcon style={{marginRight: 4, position:'relative', top:0,rigth:100,}}/>
                <span style={{color: 'var(--yach-primary1)'}}>Puesta del sol</span>
            </div>
            <span  style={{color:'white'}}>{t('prices')}</span>
            <Col style={{width: '100%',marginBottom:20}}>
              <Row style={{width: '100%'}}>
                <Slider 
                  max={costsLimit[1]} 
                  min={costsLimit[0]}
                  marks={marksCosts}
                  tipFormatter={value => <span style={{
                    }}>${value}</span>}
                  value={costs}
                  step={100} 
                  range={{
                    draggableTrack: true
                  }}
                  tooltipPlacement={'topRight'}
                  style={{
                    width: '100%',
                    marginTop: '35px',
                    
                  }}
                  onChange = { (e) => {
                    if (e[0]>e[1]){
                      setCosts(e[1],e[0])
                    }else{
                      setCosts(e)
                    }
                  } }
                />
              </Row>
              <Row
                style={{
                    display:'flex',
                    flexDirection:'row',
                  justifyContent: 'space-between',
                  fontSize: '13px',
                  textAlign: 'center',
                }}>
                <Col>
                  <h3
                  className={webStyles.lblAvailable}
                    style={{
                      color: 'var(--text-white)',
                      marginBottom:5,
                      marginTop: '10px'}}>${costs[0]} </h3>
                  <h3
                  className={webStyles.lblAvailable}
                    style={{
                      color: 'var(--text-white)',
                      lineHeight: '3px'}}>{t('minumun')}</h3>
                </Col>
                <Col>
                  <h3
                  className={webStyles.lblAvailable}
                    style={{
                      color: 'var(--text-white)',
                      marginBottom:5,
                      marginTop: '10px'}}>${costs[1]}</h3>
                  <h3
                  className={webStyles.lblAvailable}
                    style={{
                      color: 'var(--text-white)',
                      lineHeight: '3px'}}>{t('maximun')}</h3>
                </Col>
              </Row>
            </Col>
            <span  style={{color:'white'}}>{t('kinda_yacht')}</span>
            <div className={webStyles.contCiudad}>
                <YachtIcon style={{marginRight: 4, position:'relative', top:0,rigth:100,}}/>
                <span style={{color: 'var(--yach-primary1)'}}>Yate de proa abierta</span>
            </div>

            <span  style={{color:'white'}}>{(t('availability'))}</span>
            <div className={webStyles.contCiudad}>
                <span style={{color: 'var(--yach-primary1)'}} className={webStyles.lblAvailable}>{moment().format('YYYY-MM-DD')} | {moment().add(1, 'day').format('YYYY-MM-DD')}</span>
                <CalendarIcon style={{marginLeft: 4, position:'relative', top:0,rigth:100,}}/>
            </div>

            <Button id={'advance_button'} type="primary" htmlType="submit" className={'btn btn-primary light-hover'} onClick={() => changeLanding(true)}>
            {t('search_show_yachts')}
            </Button>

        </div>
    )
}


export default WebFilters;