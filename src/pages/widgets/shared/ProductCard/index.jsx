import { sampleImage } from "../../../../helper/constants";
import { formatCurrent } from "../../../../helper/currency";
import Discount from "../Discount/Discount";
import Text from "../../../../components/Text";
import Spacer from "../../../../components/Spacer";
import Background from "../../../../components/Background";
import StarRatingDisplay from "../../../../components/StarRatingDisplay";

import style from "./style.module.css";

export default function ProductCard(props) {
    const { image = null, title = "T-shirt with Tape Details", rating = 4.5, discount = 20, price = 240 } = props;
    return (
        <div className={style.productCard}>
            <div className={style.imageWrapper}>
                <Background retainAspectRatio lazy={false} {...sampleImage} />
            </div>
            <Spacer />
            <Text className="bold fs20">{title}</Text>
            <Spacer />
            <StarRatingDisplay rating={rating} size={20} />
            <Spacer />
            <div className={style.priceInfo}>
                <Text className="bold fs24">{formatCurrent({ price })}</Text>
                <Text className="bold fs24 opacity40 strikethrough">{formatCurrent({ price: price + (price * (discount / 100)) })}</Text>
                <Discount discount={discount} />
            </div>
        </div>
    )
}
