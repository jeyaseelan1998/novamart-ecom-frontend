import { sampleProductList } from '../helper/constants'
import ProductsGrid from './widgets/ProductsGrid'
import WelcomeDiscountBanner from './widgets/WelcomeDiscountBanner'

export default function Home() {
    return (
        <div>
            <WelcomeDiscountBanner />
            <ProductsGrid list={sampleProductList} title="NEW ARRIVALS" />
        </div>
    )
}
