import { get } from "lodash";
import { useState } from "react";
import { toast } from "react-toastify";
import { Field, Form } from "react-final-form";

import api from "../../../helper/api";
import Text from "../../../components/Text";
import Center from "../../../components/Center";
import Button from "../../../components/Button";
import Spacer from "../../../components/Spacer";
import Input from "../../../components/Fields/Input";

import style from './style.module.css';

export default function Newsletter({ title, ctaLabel }) {
    const [fetching, setFetching] = useState(false);
    const [resetKey, setResetKey] = useState(false);

    const handleSubmit = async (values) => {
        try {
            setFetching(true);
            const response = await api.post('/newsletter', values);
            if (get(response, 'data.success')) {
                toast.success('Your Newsletter Created');
                setResetKey(Date.now());
            } else {
                toast.error(get(response, 'data.message'));
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
        setFetching(false);
    }

    return (
        <Center>
            <div className={style.newsletter}>
                <div className={style.title}>
                    <Text className='uppercase bold secondaryFont' fs={40}>{title}</Text>
                </div>

                <Form
                    key={resetKey}
                    onSubmit={handleSubmit}
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
                                fetching={fetching}
                            />
                        </form>
                    )}
                />
            </div>
        </Center>
    )
}
