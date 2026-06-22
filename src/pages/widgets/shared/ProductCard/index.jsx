import { formatCurrent } from "../../../../helper/currency";
import Discount from "../Discount/Discount";
import Text from "../../../../components/Text";
import Spacer from "../../../../components/Spacer";
import Background from "../../../../components/Background";
import StarRatingDisplay from "../../../../components/StarRatingDisplay";

import style from "./style.module.css";

export default function ProductCard(props) {
    const { image = null, title = "", rating = 0, discount = 0, price = 0 } = props;
    return (
        <div className={style.productCard}>
            {
                image && (
                    <div className={style.imageWrapper}>
                        <Background retainAspectRatio {...image} />
                    </div>
                )
            }
            {
                title && (
                    <>
                        <Spacer />
                        <Text className="bold" fs={20}>{title}</Text>
                    </>
                )
            }
            <Spacer />
            <StarRatingDisplay rating={rating} size={20} />
            <Spacer />
            <div className={style.priceInfo}>
                <Text className="bold" fs={24}>{formatCurrent({ price })}</Text>
                {
                    discount > 0 && (
                        <>
                            <Text className="bold opacity40 strikethrough" fs={24}>{formatCurrent({ price: price + (price * (discount / 100)) })}</Text>
                            <Discount discount={discount} />
                        </>
                    )
                }
            </div>
        </div>
    )
}
