import { sampleImage } from "../../../../helper/constants";
import Background from "../../../../components/Background";
import Spacer from "../../../../components/Spacer";

import style from "./style.module.css";

export default function ProductCard(props) {
    const { image = null, title, rating = 0, discount = 0 } = props;
    return (
        <div className={style.productCard}>
            <div className={style.imageWrapper}>
                <Background retainAspectRatio lazy={false} {...sampleImage} />
            </div>
            <Spacer />
            <div className={style.imageWrapper}>
                <Background retainAspectRatio lazy={false} {...sampleImage} />
            </div>
        </div>
    )
}
