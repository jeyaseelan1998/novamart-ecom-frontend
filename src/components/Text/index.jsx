import { split } from "lodash";

import style from "./style.module.css";

export default function Text({ tag: Tag = 'div', children, fs = 16, className }) {
    const css = split(className, ' ').map(c => style[c] ? style[c] : c).filter(Boolean).join(' ');

    return (
        <Tag className={`${style.text}${style["fs" + fs] ? ` ${style["fs" + fs]}` : ''}${css ? ` ${css}` : ''}`}>
            {children}
        </Tag>
    )
}
