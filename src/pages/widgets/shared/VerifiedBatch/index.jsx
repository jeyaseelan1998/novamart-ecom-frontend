import { getIcon } from '../../../../helper/icons';
import style from './style.module.css';

export default function VerifiedBatch() {
    return (
        <i className={`${getIcon('circleCheck')} ${style.check}`}></i>
    )
}
