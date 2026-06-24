import { sampleProductList } from '../helper/constants'
import ProductsGrid from './widgets/ProductsGrid'
import ReviewCard from './widgets/ReviewCard'
import WelcomeDiscountBanner from './widgets/WelcomeDiscountBanner'

export default function Home() {
    return (
        <div>
            <WelcomeDiscountBanner />
            <ProductsGrid list={sampleProductList} title="NEW ARRIVALS" ctaLabel="View All" />
            <ReviewCard />
        </div>
    )
}
