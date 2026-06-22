import Text from "../../../../components/Text";
import style from "./style.module.css";

export default function Discount({ prefix = '-', discount }) {
    return (
        <div className={style.discount}>
            <Text className={style.text} fs={12}>{prefix}{discount}%</Text>
        </div>
    )
}