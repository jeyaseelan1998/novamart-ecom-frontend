// import { sampleProductList, sampleTestimonialList } from '../helper/constants'
import Newsletter from './widgets/NewsLetter'
// import ProductsGrid from './widgets/ProductsGrid'
// import TestimonialSlider from './widgets/TestimonialSlider'
import WelcomeDiscountBanner from './widgets/WelcomeDiscountBanner'

export default function Home() {
    return (
        <div>
            <WelcomeDiscountBanner />
            {/* <ProductsGrid list={sampleProductList} title="NEW ARRIVALS" ctaLabel="View All" /> */}
            {/* <TestimonialSlider title="OUR HAPPY CUSTOMERS" list={sampleTestimonialList} /> */}
            <Newsletter
                title="STAY UPTO DATE ABOUT OUR LATEST OFFERS"
                ctaLabel="Subscribe to Newsletter"
            />
        </div>
    )
}
