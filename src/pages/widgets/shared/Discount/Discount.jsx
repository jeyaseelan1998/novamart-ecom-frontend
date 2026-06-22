import Text from "../../../../components/Text";
import style from "./style.module.css";

export default function Discount({ prefix = '-', discount }) {
    return (
        <div className={style.discount}>
            <Text className={`fs12 ${style.text}`}>{prefix}{discount}%</Text>
        </div>
    )
}