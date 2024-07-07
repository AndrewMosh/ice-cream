interface Menu {
    name: string;
    active: boolean;
    link: string;
}

const MENU: Menu[] = [
    { name: 'Home', active: false, link: '#' },
    { name: 'Product', active: false, link: '#' },
    { name: 'Pricing', active: false, link: '#' },
    { name: 'Testimonials', active: false, link: '#' },
    { name: 'Contact us', active: false, link: '#' },
]

export default MENU