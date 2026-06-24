import { getIcon, ICONS } from '../../../../helper/icons';
import style from './style.module.css';

export default function VerifiedBatch() {
    return (
        <i className={`${getIcon(ICONS.circleCheck)} ${style.check}`}></i>
    )
}
