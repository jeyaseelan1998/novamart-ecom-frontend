import style from "./style.module.css";

export default function Section({ children, className, id, type }) {
    return (
        <section id={id} className={`${style.section}${className ? ` ${className}` : ''}${style[type] ? ` ${style[type]}` : ''}`}>{children}</section>
    )
}
