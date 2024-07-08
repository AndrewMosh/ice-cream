import girl from '../assets/girl.png'
import boy from '../assets/boy.png'

interface Slider {
    id: number;
    img: string;
    name: string;
    company: string;
    text: string;
}

const SLIDER: Slider[] = [
    { id: 1, img: girl, name: 'Alla', company: 'Microsoft', text: 'Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.' },
    { id: 2, img: boy, name: 'Alan', company: 'Apple', text: 'Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.' },
    { id: 3, img: girl, name: 'Lena', company: 'Disney', text: 'Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste.Add a joy of best Taste. Foodie Moments. Foodie Moments.' },
    { id: 4, img: boy, name: 'John', company: 'Random and Co', text: 'Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.' },
    { id: 5, img: boy, name: 'Jack', company: 'Diabetic and Co', text: 'Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.' },
    { id: 6, img: girl, name: 'Nancy ', company: 'Diabetic and Co', text: 'Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste.Add a joy of best Taste. Foodie Moments. Foodie Moments.' },
]

export default SLIDER