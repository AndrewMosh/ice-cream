import shipping from '../assets/svg/shipping.svg';
import packaging from '../assets/svg/packaging.svg';
import cashback from '../assets/svg/cash-back.svg';
import delivery from '../assets/svg/fast-delivery.svg';




interface Pluses {
    id: number,
    img: string,
    title: string,
    text: string
}

const PLUSES: Pluses[] = [
    { id: 1, img: shipping, title: 'Free Shipping', text: 'Last Chance! Free shipping on all orders ends today.' }, { id: 2, img: packaging, title: 'Quick Packaging', text: 'Last Chance! Free shipping on all orders ends today.' }, { id: 3, img: cashback, title: '100% Money Back', text: 'Last Chance! Free shipping on all orders ends today.' }, { id: 4, img: delivery, title: 'Fast Delivery', text: 'Last Chance! Free shipping on all orders ends today.' },
]

export default PLUSES