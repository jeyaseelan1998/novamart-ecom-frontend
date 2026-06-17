import style from "./style.module.css";

export default function Section({ children, className }) {
    return (
        <section className={`${style.section}${className ? ` ${className}` : ''}`}>{children}</section>
    )
}
