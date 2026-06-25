import { Field, Form } from "react-final-form";
import Center from "../../../components/Center";
import Text from "../../../components/Text";

import style from './style.module.css';
import Input from "../../../components/Fields/Input";
import Button from "../../../components/Button";
import Spacer from "../../../components/Spacer";

export default function Newsletter({ title, ctaLabel }) {
    return (
        <Center>
            <div className={style.newsletter}>
                <div className={style.title}>
                    <Text className='uppercase bold secondaryFont' fs={40}>{title}</Text>
                </div>

                <Form
                    onSubmit={(v) => console.log(v)}
                    // validate={validate}
                    render={({ handleSubmit }) => (
                        <form className={style.form} onSubmit={handleSubmit}>
                            <div>
                                <Field name="email" component={Input} />
                            </div>
                            <Spacer />
                            <Button
                                label={ctaLabel}
                                color="white"
                                type="submit"
                            />
                        </form>
                    )}
                />
            </div>
        </Center>
    )
}
