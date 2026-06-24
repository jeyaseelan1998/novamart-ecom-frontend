import { startsWith } from "lodash";
import { Link as ReactLink } from "react-router-dom";

export default function Link({ className, children, onClick, type = 'button', target = '_self', to, id }) {
    const isHTTP = startsWith(to, 'http');
    const isTel = startsWith(to, 'tel:');
    const isMail = startsWith(to, 'mailto:');

    if (isHTTP || isMail || isTel) {
        return (
            <a target='_blank' to={to} className={className} id={id}>
                {children}
            </a>
        )
    }

    if (to) {
        return (
            <ReactLink target={target} to={to} className={className} id={id}>
                {children}
            </ReactLink>
        )
    }

    return (
        <button className={className} onClick={onClick} type={type} id={id}>
            {children}
        </button>
    )
}
