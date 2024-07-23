import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
    --dark-blue: #00012E;
    --light-blue: #0086BE;
    --text-white: #FFF;
    --yach-primary1: #0086BE;
    --yach-primary2: #00628B;
    --yach-secondary1: #4CE5B1;
    --yach-secondary2:#00012E;
    --yach-secondary3: #CEE1EA;
    --yach-secondary4: #E9EEF4;
    --yach-secondary5: #00536A;
    --yach-input-text: rgba(0, 134, 190, 0.5);
    --text-gray: #999999;
    --text-black: #5A5A5A;
    --text-dark-black: #000000;
    --bg-gradient: linear-gradient(180deg, rgba(122,255,210,1) 0%, rgba(69,203,201,1) 0%, rgba(56,190,199,1) 0%, rgba(39,173,196,1) 0%, rgba(0,134,190,1) 34%, rgba(0,134,190,1) 100%)
}
.text-blue{ color: var(--yach-primary1)!important;}
.text-dark-blue{ color: var(--yach-primary2)!important;}
.text-deep-blue{ color: var(--yach-secondary2)!important;}
.text-green{ color: var(--yach-secondary1)!important;}
.text-white{ color:white!important;}
.text-input{ color: var(--yach-input-text)!important;}

*,
*:before,
*:after {
  box-sizing: inherit;
}
*{
    padding: 0;
    margin: 0;
}
html {
  box-sizing: border-box;
}

body {
  text-rendering: optimizeLegibility;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  font-family: GothamRouded,sans-serif;
}
h1.ant-typography{
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 48px;
}
h2.ant-typography{
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
}
h3.ant-typography{
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
}
h4.ant-typography{
    font-style: normal;
    font-weight: bold;
    font-size: 24px!important;
    line-height: 24px!important;
}
h5.ant-typography{
    font-style: normal;
    font-weight: bold;
    font-size: 20px!important;
    line-height: 20px!important;
}

.ant-tag.rate-tag{
    background: var(--yach-primary1);
    border-color: var(--yach-primary1);
    border-radius: 20px;
    color: var(--text-white);
    padding: 2px 14px;
    font-size: 16px;
    line-height: 1.2;
}

.ant-tag.rate-tagv2{
    background: var(--yach-secondary1);
    border-color: var(--yach-secondary1);
    border-radius: 20px;
    color: var(--text-white);
    padding: 2px 14px;
    font-size: 16px;
    line-height: 1.2;
}

.tag-squared-left{
  border-top-left-radius: 0!important;
  border-bottom-left-radius: 0!important;
  
}
.ant-divider{
  border-top: 1px solid var(--yach-primary1);
}
.ant-divider.green-divider{
  border-top: 3px solid var(--yach-secondary1);
}


.p-0{ padding: 0!important;}
.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}
.text-underline{
   text-decoration: underline;
}
.font-weight-bold{ font-weight: bold!important;}
.font-weight-normal{ font-weight: normal!important;}
.font-weight-lighter{ font-weight: lighter!important;}
a{
    color: white
}
.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}


.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}
.border-white{
  border-color: white!important;
}

.border-0 {
  border: 0 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-right-0 {
  border-right: 0 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-left-0 {
  border-left: 0 !important;
}

.w-100{ width: 100% }

.box-shadow{box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)}
.text-shadow{text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)}

/* BUTTONS */
.btn, .ant-btn{
    height: auto;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: none;
    text-decoration: none;
  }
.btn-default, .ant-btn-default{
  background-color: var(--text-white);
  border: 1px solid var(--yach-primary1);
  color: var(--yach-primary1); 
}
.btn-default:hover, .btn-default:focus, .btn-default:active,
.ant-btn-default:hover, .ant-btn-default:focus, .ant-btn-default:active {
    text-decoration: none;
    color: white!important; 
    background-color: var(--yach-primary1)!important;
}
.btn-primary, .ant-btn-primary{ background-color: var(--yach-secondary2); color: var(--text-white);  border: 1px solid var(--yach-secondary2)}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active,
.ant-btn-primary:hover, .ant-btn-primary:focus, .ant-btn-primary:active{
    background-color: var(--yach-primary2)!important;
    border: 1px solid var(--yach-primary2)!important;
    color: white!important; 
}
.btn-primary.light-hover:hover, .btn-primary.light-hover:focus, .btn-primary.light-hover:active,
.ant-btn-primary.light-hover:hover, .ant-btn-primary.light-hover:focus, .ant-btn-primary.light-hover:active{
    background-color: var(--yach-primary1)!important;
    border: 1px solid var(--yach-primary1)!important;
    color: white!important; 
}

.ant-btn[disabled], .ant-btn[disabled]:hover, .ant-btn[disabled]:focus, .ant-btn[disabled]:active{
      background: var(--yach-input-text)!important;
      border-color: var(--yach-input-text)!important;
    color: white!important; 
}

/** Calendar **/
/*.ant-picker .ant-picker-input span.ant-picker-suffix,
.ant-picker.ant-picker-range span.ant-picker-suffix {
  margin-right: 4px;
  order: -1;
}*/
.ant-picker-input:nth-child(1) > input{
  text-align: right;
}
.ant-picker-focused {
    border-color: transparent;
    box-shadow: none;
    border-right-width: 0;
    outline: 0;
}
/** Select **/
.ant-select{ font-size: 12px!important}
.ant-select.content__form__input .ant-select-selector{
    height: 32px!important;
    padding: 0 8px;
    border-radius: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
}
.ant-select-item-option{
  color: var(--yach-primary2)!important;
  font-size: 12px!important;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background-color: var(--yach-secondary3);
}
.ant-select.content__form__input .ant-select-selector .ant-select-selection-item > span:nth-child(1){
    display: inline-block;
    width: 100%;
    text-align: center;
}
/* .ant-select.content__form__input .ant-select-selector .ant-select-selection-placeholder > span:nth-child(1) span.anticon,*/
.ant-select.content__form__input .ant-select-selector .ant-select-selection-item > span:nth-child(1) span.anticon{ 
  position: absolute; left: 0; top: calc(50% - 11px)
}
.ant-select.content__form__input .ant-select-selector .ant-select-selection-item,
.ant-select.content__form__input .ant-select-selector .ant-select-selection-placeholder{
  color: var(--yach-primary2)!important;
}
 .ant-select.content__form__input .ant-select-selector .ant-select-selection-placeholder,
 .ant-select.content__form__input .ant-select-selector .ant-select-selection-placeholder > span:nth-child(1){
    display: flex;
    align-items: center;
    overflow: hidden;
 }
 .ant-select-arrow{
  color: var(--yach-primary2);
  font-size: 18px;
 }
 .ant-input[type='password'],
 .ant-input[type='text']{
 text-align: center;
 }
 
 
 .ant-picker-range .ant-picker-active-bar{ display: none!important;}
 
 /** Search form **/
 .yacht__filter_form{
    background: var(--yach-primary2);
    padding: 28px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}

.content__form__input input{
    text-align: center!important;
    font-size: 12px;
}

.content__form__input input::placeholder{
    color: var(--yach-primary2)!important;
}
.yacht__filter_form label,
.yacht__filter_form .ant-col-24.ant-form-item-label{
    color: var(--text-white);
    width:100%!important;
}

/** Range Slider **/
.ant-slider-dot{ display: none;}
.ant-slider-handle {
    width: 20px;
    height: 20px;
    background-color: var(--yach-secondary1)!important;
    border: 0;
    margin-top: -8px;
}

.ant-slider-track {
    position: absolute;
    height: 4px;
    background-color: var(--yach-secondary1)!important;
}
.ant-slider-mark-text {
    font-size: 11px;
    margin-top: 10px;
    line-height: 1;
    color: var(--text-white);
}
.ant-slider-mark-text:first-child {
    left: 0!important;
    transform: none!important;
}
.ant-slider-mark-text:last-child {
    left: auto!important;
    right: 0!important;
    transform: none!important;
}
/** Slick slider 
.slick-slider .slick-track {
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    grid-auto-flow: column;
}
.slick-initialized .slick-slide{
    width: 100%!important;
}**/

.ant-modal-content {
background:  linear-gradient(180deg, rgba(122,255,210,1) 0%, rgba(69,203,201,1) 0%, rgba(56,190,199,1) 0%, rgba(39,173,196,1) 0%, rgba(0,134,190,1) 34%, rgba(0,134,190,1) 100%);
background-clip: padding-box;
border: 0;
box-shadow: none;
pointer-events: auto;
border-radius: 20px;
color: var(--text-white);
}

.ant-modal-body {
padding: 24px;
font-weight: 325;
font-size: 16px;
line-height: 28px;
word-wrap: break-word;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

}
.ant-modal-body .ant-form-item-explain-error{ 
color: white!important; 
font-weight: normal;
font-size: 11px;
}

.slick-slider-container{
    justify-content: center;
    display: flex;
    overflow: hidden;
}
.slick-slider-container .slick-slider{
    width: calc(100% + 17px);
}
.slick-slider-container .slick-prev::before,
.slick-slider-container .slick-next::before{
  content:"";
}
.slick-slider-container .slick-prev,
.slick-slider-container .slick-next{
    display: flex!important;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: var(--text-white);
    width:42px;
    height:68px;
}
.slick-slider-container .slick-prev {
    left: 9px;
    border-radius: 0 10px 10px 0;
}

.slick-slider-container .slick-next {
    right: 8px;
    border-radius: 10px 0 0 10px;
}


/** Star Rating**/
.star__rating .ant-form-item-control-input-content{
  display: block;
}
.star__rating__container > span{ width: 100%!important;}
/*.star__rating__container .react-simple-star-rating{ width: 80%!important; }*/
.star__rating__container .filled-icons{
  overflow: hidden!important;
}
.star__rating__container .anticon-star{ width:45px; }

/** Reservation messages**/
.reservation_mesages__list{
    background: var(--text-white);
    border: 1px solid var(--yach-primary1);
    border-radius: 20px;
    padding: 0 1.5em;
    max-height: 70vh;
}
.reservation_mesages__list_content {
    height: calc(70vh - 2px);
    overflow: auto;
}
.reservation__message_input_container .ant-input::-webkit-scrollbar,
.reservation_mesages__list_content::-webkit-scrollbar {
    width: 16px;
}
.reservation__message_input_container .ant-input::-webkit-scrollbar-track,
.reservation_mesages__list_content::-webkit-scrollbar-thumb {
    background: var(--yach-secondary3);
    border-radius: 20px;
    border: 7px solid transparent;
    background-clip: padding-box;
}

.reservation_message{
    display:flex;
    width:100%; 
    margin:15px 0;             
}
.reservation_message__container{
    display: flex;
    flex-direction: column;
    max-width: 80%;

}
.reservation_message.customer_message .reservation_message__container{
        justify-content: flex-end;
}
.reservation_message__sender{
  color: var(--yach-primary2);
    width: 100%;
    display: flex;
    margin-bottom:.5em;
}
.reservation_message.customer_message .reservation_message__sender {
    text-align: right;
    flex-direction: row-reverse;
}
.reservation_message__sender__avatar img{
    width:40px;
    height: 40px;
    border-radius: 20px;
    object-fit: cover;
    object-position: center center;
}
.reservation_message__sender__name {
    padding: 0 10px;
}
.reservation_message__date{
  font-size: 12px;
  color: var(--text-gray);
}
.reservation_message.owner_message{ justify-content: flex-start}
.reservation_message.customer_message{ justify-content: flex-end}
.reservation_message__content{
    padding:15px;
    border-radius: 15px;
    color: var(--text-white);
}
.reservation_message.customer_message .reservation_message__content{
    background-color:var(--yach-primary2);
    border-bottom-right-radius: 0;
} 
.reservation_message.owner_message .reservation_message__content{
    background-color: var(--yach-primary1);
    border-bottom-left-radius: 0;
}
.reservation__message_input_container{
    border-radius: 20px;
    border: 1px solid var(--yach-primary2);
    padding: 4px 14px;
    background: var(--text-white);
}
.reservation__message_input_container .ant-input-group{
    display: flex;
    align-items: center;
}
.reservation__message_input_container .ant-input,
.reservation__message_input_container .ant-input:focus, 
.reservation__message_input_container .ant-input-focused{
    box-shadow: none;
    border-color: transparent!important;
    color: var(--yach-primary2)!important;
    min-height: 40px!important;
}
.reservation__message_input_container .ant-input-group .ant-btn-default{
    border-color: transparent!important;
    border-radius: 40px;
    width: 40px!important;
    height: 40px!important;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.reservation__message_input_container .ant-input-group .ant-btn-default .anticon{
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.reservation__message_input_container .ant-input-group .ant-btn-default .anticon-send{
    transform: rotate(320deg);
}

.d-mobile{
    display: none;
}
.white-errors .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{ display: none!important;}
.white-errors .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::after {
    display: inline-block;
    margin-left: 4px;
    color: white;
    font-size: 14px;
    line-height: 1;
    content: '*';
    font-family: SimSun, sans-serif;
}
.ant-form-item-explain-error{ font-size: 10px;}
.white-errors .ant-form-item-explain-error{ color: white!important;}

@media screen and (max-width: 767px){
    .d-mobile{
        display: block;
    }
    body {
      font-size: 14px;
      line-height: 16px;
    }
    h1.ant-typography{
        font-size: 40px;
        line-height: 40px;
    }
    h2.ant-typography{
        font-size: 32px;
        line-height: 32px;
    }
    h3.ant-typography{
        font-style: normal;
        font-weight: 350;
        font-size: 24px;
        line-height: 24px;
    }
    h4.ant-typography{
        font-size: 20px!important;
        line-height: 20px!important;
    }
    h5.ant-typography{
        font-size: 16px!important;
        line-height: 16px!important;
    }
}`;

export default GlobalStyles;