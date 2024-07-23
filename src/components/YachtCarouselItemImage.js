import webStyles from '../styles/Website.module.css';
import RateTag from './RateTag';
const YachtCarouselItemImage = ({imageUrl, showRate, rate=5}) => {
    return(<>
        <img className={webStyles.carrousel__img} src={imageUrl} style={{cursor: 'pointer'}}/>
        {showRate && <RateTag
            squaredLeft={true}
            className={'box-shadow'}
            style={{position: 'absolute', top: 30, left: '2.5%'}}
            rate={rate}/>
        }
    </>)
}
export default YachtCarouselItemImage
