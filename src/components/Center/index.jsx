import style from "./style.module.css";

export default function Center({ children }) {
    return (
        <div className={style.center}>{children}</div>
    )
}
