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

        return css;
    }

    let Tag = disabled ? 'div' : Link;

    if (fetching) {
        return (
            <div className={getClassName()}>
                <Spinner size={16} />
            </div>
        )
    }

    return (
        <Tag className={getClassName() + ' ' + style.disabled} type={type} target={target}>
            {
                label && <Text className="fw500" fs={16}>{label}</Text>
            }
            {
                icon && <i className={icon}></i>
            }
            {
                img && <Background retainAspectRatio={false} lazy={false} {...img} />
            }
        </Tag>
    )
}
