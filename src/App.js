import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import { YachtIcon2x } from './components/WebIcons';
import './App.css';
import WebSiteHeader from '../src/components/webSiteHeader';
import webStyles from '../src/styles/Website.module.css';
import i18n from './locales/i18n';
import Loader from './components/Loader';
import YachtsCarouselWrapper from './components/YachtsCarouselWrapper';
import YachtCarouselItem from './components/YachtCarouselItem';
import YachtCarouselItemImage from './components/YachtCarouselItemImage';
import YachtCarouselItemFooter from './components/YachCarouselItemFooter';
import { Row, Col, Typography, Button, Divider, Image } from 'antd'
import ModalLandigPage from './components/ModalLandingPage';
import GlobalStyles from './styles/gobalStyles';
import WebsiteYachtCard from './components/WebSiteYachtCard';
import RateTag from './components/RateTag';
import WebsiteFooter from './components/WebsiteFooter';
import WebFilters from './components/WebSiteYachFilters';
import { faXmark, faFilter} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next';
import playStore from './assets/GooglePlay.png';
import appStore from './assets/AppStore.png'

const { Title, Paragraph, Text } = Typography;

function App() {
  //const t = i18n.t;
  const {t, i18n} = useTranslation()
  const [landigPage, setLandigPage] = useState(false)
    const [resize,setResize] = useState(true);
    const [isMobile, setMobile] = useState(false);
    const [priceInit, setPriceInit] = useState([0,1000])
    const [showMenu, setShowMenu] = useState(false);
    const [currency, setCurrency] = useState('MXN')

    useEffect(() => {
      getResize()
      window.addEventListener("resize", getResize);
      return () => window.removeEventListener("resize", getResize);
    },[])

    const getResize = () => {
      if(window.innerWidth < 600) setMobile(true)
      else setMobile(false)
  }
  const yachts = [
    {
        _id:"e32381cd-2002-451a-945d-fa6f99f94d0d",
        name:"Ana Marie IV",
        _idowner:"a30deaca-af64-41ae-8db3-ffc74bac4db2",
        owner:"Luis David",
        size:43,
        capacity:14,
        maintenance:1,
        _idtype:2,
        status:1,
        created:"2023-02-02T14:43:40.5356920Z",
        updatedby:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        isrecomended:true,
        _iduser:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        qualification:5,
        qfn:0,
        updated:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        yachtDetails:"<p>Disfruta de Anaa Marrie IV una embarcación de 43 pies que te llevará por las turquesas aguas del mar caribe mexicano. Esta es una experiencia que puedes vivir con hasta 14 acompañantes en la misma embarcación, una combinación perfecta para maravillarse con el mar.</p><p><strong>Incluye:</strong></p><p>24 Cervezas, 24 Refrescos, 24 Aguas y 4 bolsas con hielo</p><p><strong>No incluye </strong>impuesto de muelle.<strong>:</strong></p><p>$100 MXN por persona.</p><p><br></p><h2><br></h2>",
        currency:"MXN",
        price:21250,
        engines:1,
        bathrooms:1,
        cabins:1,
        lifevest:14,
        defaultimg:{
            uri320:"https://cdn.yachtme.mx/yachts/e32381cd-2002-451a-945d-fa6f99f94d0d/320/3166219e-971b-4bc3-bc81-14c1f35c752c.jpeg",
            uriori:"https://cdn.yachtme.mx/yachts/e32381cd-2002-451a-945d-fa6f99f94d0d/full/3166219e-971b-4bc3-bc81-14c1f35c752c.jpeg"
        },
    },
    {
        _id:"59b5c919-09c6-454b-905c-900c9b80de5e",
        name:"Maya Sea III",
        _idowner:"5717e578-0af7-42a8-ac22-193b454d1c6b",
        owner:"Jorge Luis",
        size:51,
        capacity:14,
        maintenance:1,
        _idtype:1,
        status:1,
        created:"2023-03-08T14:47:31.2716865Z",
        updatedby:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        isrecomended:true,
        _iduser:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        qualification:5,
        qfn:0,
        updated:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        details:null,
        yachtDetails:"<p>¡Descubre las maravillas del Caribe a bordo del Maya Sea, nuestro yate de 51 pies! Perfecto para grupos de hasta 14 personas, disfruta de una experiencia única de snorkel y un relajante paseo por la hermosa Isla Mujeres. Admira los arrecifes de coral y la vida marina mientras te sumerges en aguas cristalinas.</p><p>¡Reserva ahora y vive una experiencia inolvidable en el Maya Sea!</p><p><strong>Incluye:</strong></p><p>24 aguas, 24 cervezas, 24 refrescos</p><p><strong>Importe extra:</strong></p><p>$150 MXN impuesto de muelle por persona. Se paga al llegar.</p>",
        currency:"MXN",
        price:21250,
        brand:"Sea Ray ",
        model:"Fligth Bridge",
        engines:1,
        bathrooms:2,
        cabins:3,
        lifevest:18,
        defaultimg:{
            uri320:"https://cdn.yachtme.mx/yachts/59b5c919-09c6-454b-905c-900c9b80de5e/320/f9d8dc2d-dba1-41bf-b964-edc23093fb53.jpeg",
            uriori:"https://cdn.yachtme.mx/yachts/59b5c919-09c6-454b-905c-900c9b80de5e/full/f9d8dc2d-dba1-41bf-b964-edc23093fb53.jpeg"

        }
    },
    {
        _id:"f261e3f8-c736-4617-ac01-45a9aff9d064",
        name:"Maya Sea II",
        _idowner:"5717e578-0af7-42a8-ac22-193b454d1c6b",
        owner:"Jorge Luis",
        size:41,
        capacity:12,
        maintenance:1,
        _idtype:1,
        status:1,
        created:"2023-03-08T14:41:21.4840756Z",
        updatedby:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        isrecomended:true,
        _iduser:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        qualification:5,
        qfn:0,
        updated:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        details:null,
        currency:"MXN",
        price:16250,
        brand:"Formula",
        model:"PC",
        engines:1,
        bathrooms:1,
        cabins:2,
        lifevest:16,
        defaultimg:{
            uri320:"https://cdn.yachtme.mx/yachts/f261e3f8-c736-4617-ac01-45a9aff9d064/320/299f4c98-1c08-4e80-ae3c-5aef985c1859.jpeg",
            uriori:"https://cdn.yachtme.mx/yachts/f261e3f8-c736-4617-ac01-45a9aff9d064/full/299f4c98-1c08-4e80-ae3c-5aef985c1859.jpeg"

        }
    },
    {
        _id:"7f4687b7-1582-4b8f-bd78-914cddb65ffa",
        name:"Zoom",
        _idowner:"5717e578-0af7-42a8-ac22-193b454d1c6b",
        owner:"Jorge Luis",
        size:80,
        capacity:25,
        maintenance:1,
        _idtype:1,
        status:1,
        created:"2023-03-02T17:18:01.0184894Z",
        updatedby:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        isrecomended:true,
        _iduser:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        qualification:5,
        qfn:0,
        updated:"2ca5f79f-d40a-472d-925f-c1f7fe392bde",
        details:null,
        currency:"MXN",
        price:61250,
        brand:"Palmer Johnson",
        model:"2001",
        engines:1,
        bathrooms:2,
        cabins:2,
        lifevest:35,
        total:17,
        defaultimg:{
            uri320:"https://cdn.yachtme.mx/yachts/7f4687b7-1582-4b8f-bd78-914cddb65ffa/320/9818c459-4352-4cbd-b14f-c49ae5f6695f.jpeg",
            uriori:"https://cdn.yachtme.mx/yachts/7f4687b7-1582-4b8f-bd78-914cddb65ffa/full/9818c459-4352-4cbd-b14f-c49ae5f6695f.jpeg"
        }
    },
    {
        _id:"02b1e6a5-75a8-41b1-a88a-5a6a6aa1f21e",
        name:"Mint",
        _idowner:"22585ca8-5e89-40af-91f5-278fed4b9963",
        owner:"Nelly",
        size:40,
        capacity:10,
        maintenance:1,
        _idtype:2,
        status:1,
        isrecomended:true,
        qualification:5,
        qfn:0,
        currency:"USD",
        price:27500,
        engines:1,
        bathrooms:1,
        cabins:1,
        lifevest:12,
        defaultimg:{
            uri320:"https://cdn.yachtme.mx/yachts/02b1e6a5-75a8-41b1-a88a-5a6a6aa1f21e/320/cb603a76-56a1-4595-8f53-28e0d3e66af7.jpeg",
            uriori:"https://cdn.yachtme.mx/yachts/02b1e6a5-75a8-41b1-a88a-5a6a6aa1f21e/full/cb603a76-56a1-4595-8f53-28e0d3e66af7.jpeg"  
        }
    },
    {
        _id:"a2ca4dfe-f5c1-4351-bbac-c0ad97d24ddf",
        name:"Boat Drinks",
        _idowner:"5717e578-0af7-42a8-ac22-193b454d1c6b",
        owner:"Jorge Luis",
        size:63,
        capacity:15,
        maintenance:1,
        _idtype:2,
        status:1,
        isrecomended:true,
        qualification:5,
        qfn:0,
        currency:"MXN",
        price:26250,
        engines:1,
        bathrooms:2,
        cabins:2,
        lifevest:0,
        defaultimg:{
            uri320:"https://cdn.yachtme.mx/yachts/a2ca4dfe-f5c1-4351-bbac-c0ad97d24ddf/320/5c6eddac-f425-4339-8ee6-12d6fe2d13a9.jpeg",
            uriori:"https://cdn.yachtme.mx/yachts/a2ca4dfe-f5c1-4351-bbac-c0ad97d24ddf/full/5c6eddac-f425-4339-8ee6-12d6fe2d13a9.jpeg"
        }
    },
    {
        _id:"468460d6-3e63-4635-a653-76fbd02d52ee",
        name:"Moho",
        _idowner:"c781799d-45d5-4ebc-90fe-f9b9a1b1ea1c",
        owner:"Alfonso ",
        size:63,
        capacity:12,
        maintenance:1,
        _idtype:2,
        status:1,
        isrecomended:true,
        qualification:5,
        qfn:0,
        currency:"MXN",
        price:26250,
        engines:1,
        bathrooms:0,
        cabins:0,
        lifevest:14,
        defaultimg:{
            uri320:"https://cdn.yachtme.mx/yachts/468460d6-3e63-4635-a653-76fbd02d52ee/320/65dbfb7d-0846-43c3-8178-1e7edbfd718b/2023-02-03T15:08:04.4097613Z.jpeg",
            uriori:"https://cdn.yachtme.mx/yachts/468460d6-3e63-4635-a653-76fbd02d52ee/full/65dbfb7d-0846-43c3-8178-1e7edbfd718b/2023-02-03T15:08:04.6197802Z.jpeg",
        }

    },
    {
        _id:"ae263f22-57f2-4ff7-9c14-2d39feeca324",
        name:"Sprindle",
        _idowner:"5717e578-0af7-42a8-ac22-193b454d1c6b",
        owner:"Jorge Luis",
        size:45,
        capacity:15,
        maintenance:1,
        _idtype:2,
        status:1,
        isrecomended:true,
        qualification:5,
        qfn:0,
        currency:"MXN",
        price:27500,
        engines:1,
        bathrooms:1,
        cabins:1,
        lifevest:15,
        defaultimg:{
            uri320:"https://cdn.yachtme.mx/yachts/ae263f22-57f2-4ff7-9c14-2d39feeca324/320/7a7bbcb6-12c4-42a2-be65-b2a83f50fbce/2023-02-04T15:16:39.4038615Z.jpeg",
            uriori:"https://cdn.yachtme.mx/yachts/ae263f22-57f2-4ff7-9c14-2d39feeca324/full/7a7bbcb6-12c4-42a2-be65-b2a83f50fbce/2023-02-04T15:16:39.4764129Z.jpeg"
        }
    }
]

const onSelectedYacht = () => {
  setLandigPage(true)
}


  return (
    <div className={webStyles.App}>
      <GlobalStyles />
      <WebSiteHeader currenciesList={[]} onChangeCurrency={(key) => setCurrency(key)} currency={currency} resize={isMobile}/>
      {yachts.length > 0 ? (
         <div className={webStyles.container}>
         <Row gutter={32} className={'mt-3 mb-4'}>
             <Col span={24}>
                 <Title level={4} className={'text-deep-blue'}>{t('search_here_start_nautical')}</Title>
                 <Paragraph className={'text-dark-blue'}>
                     {t('payment_protected_information')}
                 </Paragraph>
             </Col>
         </Row>
         <Row gutter={32} className='mt1'>
            {isMobile ? ( 
              <Col xs={24}>
                  <Button 
                      style={{marginBottom:15, marginLeft:15}}
                      onClick={() => setShowMenu(!showMenu)}>
                          <FontAwesomeIcon icon={showMenu ? faXmark : faFilter} onClick={() => setShowMenu(!showMenu)}
                      /></Button>
                  {showMenu ? (
                     <WebFilters
                          priceInit={priceInit}
                          changeLanding={(val) => setLandigPage(val)}
                      /> 
                  ): null}
              </Col>
              ):(
              <Col xs={24} sm={24} md={9} lg={7} style={{ marginBottom: yachts && yachts.length === 1 ? '15px': '0' }}>
                  <WebFilters
                      priceInit={priceInit}
                      changeLanding={(val) => setLandigPage(val)}
                  />
              </Col>)}
         <Col  xs={24} sm={24} md={15}  lg={17}>
             {
                 yachts.length == 0 && (
             
             <div className={webStyles.recommended}>
                 <Title level={4} className={'mb-3'}>
                     <YachtIcon2x/>&nbsp;
                     <span className={'text-green'}>|</span>&nbsp;
                     <span  className={'text-dark-blue'}>{t('search_recommended_yacths_places')}</span>
                 </Title>
                 {/* <CarouselRecommendedYachts className={'mb-3'}/>*/}

                 <YachtsCarouselWrapper>
                 { yachts && yachts.slice(0,1).map((yacht) =>
                     <YachtCarouselItem key={yacht._id}
                         onClickItem = { onSelectedYacht }
                         yacht = { yacht }
                         YatchCarouselItemImage={
                             <YachtCarouselItemImage
                                 imageUrl={yacht.defaultimg.uriori}
                                 showRate={true} rate={yacht.qualification || 5}/>
                         }
                         YatchCarouselItemFooter={
                             <YachtCarouselItemFooter
                                 title={yacht.name}
                                 //description={<>{t('desde_price_text')} {currency.symbol} <FormattedNumber value={currencyConverse(yacht.currency, yacht.price, currency.id, currencyExchange)}/> {currency.id}</>}

                                 />
                         }
                     />
                 )}
                 </YachtsCarouselWrapper>
                 <Divider />
             
             </div>
             )}
             {
                 yachts && yachts.length > 0 && (
             
             <div className={webStyles.recommended}>
                 <Title level={4} className={'mb-3'}>
                     <YachtIcon2x/>&nbsp;
                     <span className={'text-green'}>|</span>&nbsp;
                     <span  className={'text-dark-blue'}>{t('search_recommended_yacths')}</span>
                 </Title>
                 {/* <CarouselRecommendedYachts className={'mb-3'}/>*/}

                 <YachtsCarouselWrapper>
                 { yachts && yachts.slice(0,2).map((yacht) =>
                     <YachtCarouselItem key={yacht._id}
                         onClickItem = { onSelectedYacht }
                         yacht = { yacht }
                         YatchCarouselItemImage={
                             <YachtCarouselItemImage
                                 imageUrl={yacht.defaultimg.uriori}
                                 showRate={true} rate={yacht.qualification || 5}/>
                         }
                         YatchCarouselItemFooter={
                             <YachtCarouselItemFooter
                                 title={yacht.name}
                                 //description={<>{t('desde_price_text')} {currency.symbol} <FormattedNumber value={currencyConverse(yacht.currency, yacht.price, currency.id, currencyExchange)}/> {currency.id}</>}

                                 />
                         }
                     />
                 )}
                 </YachtsCarouselWrapper>
                 <Divider />
             
             </div>
             )}
             <div className={'mb-3'}>
                 <small>{t('search_showing')}{` ${ yachts && yachts.length > 0 ? yachts.length : 0 } `}{t('search_showing_result')}</small>
             </div>

             <Row>
                 <Col  xs={24} sm={24} md={24}  lg={22}>

                     {
                         yachts && yachts.map((yacht) => (
                             
                         <WebsiteYachtCard
                             key={yacht._id}
                             title={<>{yacht.name} <RateTag rate={ yacht.qualification }/></>}
                             //description={<>{t('desde_price_text')} {currency.symbol} <FormattedNumber value={currencyConverse(yacht.currency, yacht.price, currency.id, currencyExchange)}/> {currency.id} <RateTag rate={ yacht.qualification }/></>}
                             buttonText={t('search_see_details')}
                             yacht = { yacht }
                             resize={resize}
                             onButtonClick={ onSelectedYacht }
                             backgroundImage = { yacht.defaultimg.uri320 }
                             selectedCurrency={currency}
                             extraActions={<>
                                 {/* <Button className={['btn btn-primary']}
                                     onClick={() => {
                                         setYachtSelected(yacht)
                                         setSHow(true)
                                     }}
                                 >
                                     {t('yachtme_see_availability')}
                                 </Button> */}
                             </>}
                         />
                         ))
                     }
                 </Col>
             </Row>
         </Col>
         </Row>
         <ModalLandigPage visible={landigPage} /> 
         <div 
            style={{
              position:'fixed',
              bottom:30,
              right:40,
              display:'flex',
              flexDirection:'column',          
              zIndex:10,
            }}>
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
            </div>
     </div>
      ): <Loader />}
      <WebsiteFooter setLandingPage={(val) => setLandigPage(true)}/>
    </div>
  );
}

export default App;
