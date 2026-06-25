import { getIcon } from "../../../helper/icons";
import style from "./style.module.css";

export default function Input({ input: { name, value, onChange }, label, type = 'text', required, disabled }) {
    const onChangeHandler = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className={style.field}>
            {
                label && (
                    <label>{label}{required ? "*" : ''}</label>
                )
            }
            <div className={style.inputContainer}>
                <span className={style.icon}>
                    <i className={getIcon('envelope')}></i>
                </span>
                <input name={name} value={value} onChange={onChangeHandler} type={type} required={required} disabled={disabled} placeholder="Enter your email address" />
            </div>
        </div>
    )
}
