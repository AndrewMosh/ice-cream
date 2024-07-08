import randomPic from '../assets/images/random.png'

interface IceCreams {
    img: string;
    title: string,
    text: string
}

const RANDOMICECREAMS: IceCreams[] = [
    {
        img: randomPic, title: 'Brown bread',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    }, {
        img: randomPic, title: 'Cayenne chocolate',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    }, {
        img: randomPic, title: 'Sweet corn',
        text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    }
]

export default RANDOMICECREAMS