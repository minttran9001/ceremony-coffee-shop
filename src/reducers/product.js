import * as type from '../constants/index'

var initialState = [
    {
        id:1,
        category: 'Espresso',
        type: 'Tarrazú',
        name: 'Costa Rica Nacientes Honey',
        price: 19,
        special : 'Be Loved',
        color:'#FCD8B8',
        img: '//cdn.shopify.com/s/files/1/2220/0129/products/CRNacientesHoney.jpg?v=1599848329'
    },
    {
        id:7,
        category: 'Espresso',
        type: 'Chiapas',
        name: 'Mexico Siltepec',
        price: 15,
        special : '',
        color:'#E7DAD3',
        img: '//cdn.shopify.com/s/files/1/2220/0129/products/MexicoSiltepec-2.jpg?v=1598639934'
    },
    {
        id:2,
        category: 'Subscription',
        type: 'Huila',
        name: 'Colombia El Roble',
        price: 19,
        color:'#DDCDE9',
        special : '',
        img: '//cdn.shopify.com/s/files/1/2220/0129/products/ColoElRoblehero.jpg?v=1599157793'
    },
    {
        id:3,
        category: 'Subscription',
        type: 'Gedeo',
        name: 'Ethiopia Halo Hartume',
        price: 19,
        special : 'Sale 10%',
        color:'#FBC2C1',
        img: '//cdn.shopify.com/s/files/1/2220/0129/products/EthiopiaHaloHartume.jpg?v=1599157940'
    },
    {
        id:4,
        category: 'Single Origin',
        type: 'Copan, Honduras',
        name: 'Honduras Perdomo Honey',
        price: 18,
        color:'#DDCDE9',
        special : 'Be Loved',
        img: '//cdn.shopify.com/s/files/1/2220/0129/products/hondurasperdomo-hero.jpg?v=1599157862'
    },
    {
        id:5,
        category: 'Decaf',
        type: 'Uraga, Guji',
        name: 'Enthiopia Laayoo Natural',
        price: 19,
        special : '',
        color:'#FACDE5',
        img: '//cdn.shopify.com/s/files/1/2220/0129/products/Eth-Laayyoo-Hero.jpg?v=1599157970'
    },
    {
        id:6,
        category: 'Blend',
        type: 'Uraga, Guji',
        name: 'Ethiopia Raro ',
        price: 19,
        special : '',
        color:'#CEE3F1',
        img: '//cdn.shopify.com/s/files/1/2220/0129/products/rwandahumure1_f75d50bf-8bfc-4ae3-b392-c2129bf77f8a.jpg?v=1598032864'
    },
    {
        id:8,
        category: 'Filter',
        type: 'Chemex',
        name: 'Chemex Unfolded Half Moon Filters ',
        price: 19,
        special : '',
        color:'#EEEEEE',
        img: '//cdn.shopify.com/s/files/1/2220/0129/products/Chemex_Filters_cc4da06a-d0a3-480e-9e0a-4d9f921a4406.jpg?v=1511972047'
    },
    {
        id:9,
        category: 'Filter',
        type: 'Uraga, Guji',
        name: 'Aeropress Filters ',
        price: 4,
        special : '',
        color:'#EEEEEE',
        img: '//cdn.shopify.com/s/files/1/2220/0129/products/Aaeropress_Filters.jpg?v=1511972913'
    },
    {
        id:10,
        category: 'Filter',
        type: 'Stanta Barbara',
        name: 'Hondusra El Campo ',
        price: 19,
        special : '',
        color:'#FBDFE2',
        img: require('../images/100ppi/product/apple-pink.jpg')
    },
    {
        id:11,
        category: 'Filter',
        type: ' ',
        name: '6-Panel Wool Hat ',
        price: 4,
        special : '',
        color:'#5C9680',
        img: require('../images/100ppi/product/fieldtriphat-green.jpg')
    },
    {
        id:13,
        category: 'Filter',
        type: ' Columbia + Guatemala',
        name: 'Holiday Annuals 2020',
        price: 20,
        color:'#E6C164',
        special : '',
        img: require('../images/100ppi/product/holiday20hero.jpg')
    },
    {
        id:14,
        category: 'Filter',
        type: ' ',
        name: '12oz Tumbler',
        price: 10,
        special : '',
        color:'#8AC7F9',
        img: require('../images/100ppi/product/redbluetumblers-hero.jpg')
    },
    {
        id:15,
        category: 'Filter',
        type: ' ',
        name: '5-Panel Courdy Hard',
        price: 19,
        special : 'Sale 15%',
        color:'#FCCB8C',
        img: require('../images/100ppi/product/FieldTrip-Maize-Hero.png')
    },
    {
        id:16,
        category: 'Filter',
        type: ' ',
        name: '6-Panel Courdy Hard',
        price: 19,
        color:'#C69988',
        special : '',
        img: require('../images/100ppi/product/FieldTrip-Rust-hero.png')
    },
    {
        id:17,
        category: 'Filter',
        type: ' ',
        name: 'Bonavita Immersion',
        price: 99,
        special : 'Sale 10%',
        special : '',
        color:'#EEEEEE',
        img: require('../images/100ppi/product/Bonavita_Immersion_Dripper.png')
    },
    {
        id:18,
        category: 'Filter',
        type: ' ',
        name: 'Capresso BurrGrinder',
        price: 59,
        color:'#EEEEEE',
        special : 'Be Loved',
        img: require('../images/100ppi/product/Capresso_BurrGrinder.png')
    },
    {
        id:19,
        category: 'Cold Brew',
        type: ' ',
        name: 'Cold Brew Massive',
        price: 60,
        color:'#EEEEEE',
        special : '',
        img: require("../images/100ppi/coldbrew-massive.jpg")
    },
    {
        id:20,
        category: 'Cold Brew',
        type: ' ',
        name: 'Cold Brew Box',
        price: 60,
        special : 'Sale 10%',
        color:'#EEEEEE',
        img: require("../images/100ppi/coldbrew.jpg")
    },
];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.VIEW_PRODUCT:
            return [...state];
        case type.SORT_PRODUCT_BY:   
                return [...state];
        default:
            return [...state];
    }

}
export default myReducer;