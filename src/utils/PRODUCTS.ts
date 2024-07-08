import brown from '../assets/images/brownbread.png'
import choco from '../assets/images/choco.png'
import corn from '../assets/images/corn.png'

interface Product {
    img: string;
    title: string,
    text: string,
    price: number,
    oldprice: string,
}



interface Products {
    'ice cream': Product[],
    chocolate: Product[],
    cakebatter: Product[],
    candycane: Product[],
    platters: Product[],
    dessert: Product[]

}

const PRODUCTS: Products = {
    'ice cream': [{
        img: brown, title: 'Brown bread',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: choco, title: 'Cayenne chocolate',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: corn, title: 'Sweet corn',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }],
    chocolate: [{
        img: choco, title: 'Cayenne chocolate',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: brown, title: 'Brown bread',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: corn, title: 'Sweet corn',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }],
    cakebatter: [{
        img: brown, title: 'Sweet corn',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: choco, title: 'Cayenne chocolate',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: corn, title: 'Brown bread',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }],
    candycane: [{
        img: corn, title: 'Brown bread',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: choco, title: 'Cayenne chocolate',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: brown, title: 'Sweet corn',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }],
    platters: [{
        img: brown, title: 'Cayenne chocolate',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: choco, title: 'Brown bread',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: corn, title: 'Sweet corn',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }],
    dessert: [{
        img: choco, title: 'Brown bread',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: brown, title: 'Cayenne chocolate',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }, {
        img: corn, title: 'Sweet corn',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price: 19.55,
        oldprice: '$22.55'
    }]
}


export default PRODUCTS