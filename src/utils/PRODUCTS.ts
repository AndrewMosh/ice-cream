import brown from '../assets/brownbread.png'
import choco from '../assets/choco.png'
import corn from '../assets/corn.png'

interface Product {
    img: string;
    title: string,
    text: string,
    price: number,
    oldprice: string,
}



interface Products {
    icecream: Product[],
    chocolate: Product[],
    cakebatter: Product[],
    candycane: Product[],
    platters: Product[],
    dessert: Product[]

}

const PRODUCTS: Products = {
    icecream: [{
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
    cakebatter: [{
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
    candycane: [{
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
    platters: [{
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
    dessert: [{
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
    }]
}


export default PRODUCTS