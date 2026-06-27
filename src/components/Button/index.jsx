import { getIcon } from "../../helper/icons";
import Background from "../Background";
import Spinner from "../Spinner";
import Text from "../Text";
import Link from "./Link";

import style from "./style.module.css";

export default function Button({ label, icon, img, disabled, fetching, type = 'button', target = '_self', color = 'primary' }) {

    const getClassName = () => {
        let css = style.button;

        if (color === 'outlined') {
            css += ' ' + style.outlined;
        }
        if (color === 'white') {
            css += ' ' + style.white;
        }

        return css;
    }

    let Tag = disabled ? 'div' : Link;

    if (fetching) {
        return (
            <div className={getClassName() + ' ' + style.loading}>
                <Spinner size={16} />
            </div>
        )
    }

    return (
        <Tag className={getClassName() + (disabled ? ' ' + style.disabled : '')} type={type} target={target}>
            {
                label && <Text className="fw500" fs={16}>{label}</Text>
            }
            {
                icon && <i className={getIcon(icon)}></i>
            }
            {
                img && <Background retainAspectRatio={false} lazy={false} {...img} />
            }
        </Tag>
    )
}
