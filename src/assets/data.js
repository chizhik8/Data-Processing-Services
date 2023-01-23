import icon1 from './icons/icon1.svg';
import icon2 from './icons/icon2.svg';
import icon3 from './icons/icon3.svg';
import icon4 from './icons/icon4.svg';
import icon5 from './icons/icon5.svg';
import icon6 from './icons/icon6.svg';
import trafficImg from './images/imgTraffic.svg';
import investImg from './images/invest.svg';
import knife from './icons/icon8.svg';
import network from './icons/icon7.svg';

const db = {
    menu: ['About', 'Gallery', 'Pricing', 'FAQ', 'Benefits'],
    hero: {
        title: 'Many reasons to get up and start to get back in the business.',
        text: 'The harder you work for something, the greater you’ll feel when you achieve it.',
    },
    features: [
        {id:'icon1', icon: icon1, title:'Ecstatic elegance', text:'Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.'},
        {id:'icon2', icon: icon2, title:'Folly words widow', text:'Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.'},
        {id:'icon3', icon: icon3, title:'Possible procured trifling', text:'We me rent been part what. An concluded sportsman offending so provision mr education.'},
        {id:'icon4', icon: icon4, title:'Open game', text:'Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.'},
        {id:'icon5', icon: icon5, title:'Endeavor', text:'Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady.'},
        {id:'icon6', icon: icon6, title:'Comfort pursuit', text:'Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.'},
    ],
    traffic: {
        title: 'Increase your business',
        titleLstWrd: 'traffic',
        text:'We are committed to processing the information in order to contact you and talk about your project.',
        img: trafficImg,
    },
    advices: {
        title: '3 Simple Ways To Save A Bunch Of Money When Buying A New Computer',
        text: 'Fully customizable and neatly organized components will help you work faster without limiting creative freedom.',
        items: [
            {id:'100+', title:'100+', text:'5 Reasons To Purchase Desktop Computers'},
            {id:'43,000+', title:'43,000+', text:'3 Simple Ways To Save A Bunch Of Money When Buying A New Computer'},
            {id:'30+', title:'30+', text:'A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More'},
        ],
    },
    invest: {
        title: 'Invest property for better',
        titleLstWrd: 'business',
        text:'We are committed to processing the information in order to contact you and talk about your project.',
        img: investImg,
    },
    details: {
        title: 'Help Finding Information Online',
        text: 'Fully customizable and neatly organized components will help you work faster without limiting creative freedom.',
        items: [
            {id:'01', title:'Feature One', text:'Fully customizable and neatly organized components will help you work faster without limiting creative freedom.', img: knife},
            {id:'02', title:'Feature Two', text:'Fully customizable and neatly organized components will help you work faster without limiting creative freedom.', img: network},
        ],
    },
    subscribe: {
        title: 'There are many reasons to get down',
        text: 'There are many reasons to get down and start to get depressed about your situation',
        sign: 'No spam. Only releases, updates and discounts',
    },
    footer: {
        title: 'Company',
        menu: [
            {id: 11, title: 'First', submenu: [{id: 1, title: 'First page'}, {id: 2, title: 'Second page'}, {id: 3, title: 'Third page'}, {id: 4, title: 'Fourth page'},]},
            {id: 12, title: 'Second', submenu: [{id: 1, title: 'First page'}, {id: 2, title: 'Second page'}, {id: 3, title: 'Third page'}, {id: 4, title: 'Fourth page'},]},
            {id: 13, title: 'Third', submenu: [{id: 1, title: 'First page'}, {id: 2, title: 'Second page'}, {id: 3, title: 'Third page'}, {id: 4, title: 'Fourth page'},]},
            {id: 14, title: 'Fourth', submenu: [{id: 1, title: 'First page'}, {id: 2, title: 'Second page'}, {id: 3, title: 'Third page'}, {id: 4, title: 'Fourth page'},]},
        ],
    }
}

export default db;