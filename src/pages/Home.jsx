import ProductCard from './widgets/shared/ProductCard'
import WelcomeDiscountBanner from './widgets/WelcomeDiscountBanner'

export default function Home() {
    return (
        <div>
            <WelcomeDiscountBanner />
            <ProductCard />
        </div>
    )
}
