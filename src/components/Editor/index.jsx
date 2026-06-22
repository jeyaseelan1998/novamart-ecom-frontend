import { split } from "lodash";

import style from "./style.module.css";

export default function Editor({ html, fs = 16, className }) {
    const css = split(className, ' ').map(c => style[c]).filter(Boolean);

    return (
        <div
            className={`${style.text}${style["fs" + fs] ? ` ${style["fs" + fs]}` : ''}${css ? ` ${css}` : ''}`}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}
