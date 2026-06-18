import style from "./style.module.css";

export default function Spacer({ size = 16}) {
    return (
        <div className={style["size" + size]} />
    )
}
