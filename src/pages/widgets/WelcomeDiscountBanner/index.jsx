import { useEffect, useState } from "react";
import Center from "../../../components/Center";
import Section from "../../../components/Section";

import style from "./style.module.css";

export default function WelcomeDiscountBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const promo = localStorage.getItem('promo');
        if (!promo) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShow(true);
        }
    }, []);

    const onClick = () => {
        localStorage.setItem('promo', 'shown');
        setShow(false);
    }

    if (!show) return null;
    return (
        <Section className={style.welcomeDiscountBanner}>
            <Center>
                <div className={style.content}>
                    <div className={style.text}>
                        <p>Sign up and get 20% off to your first order. <a href="/sign-up">Sign Up Now</a></p>
                    </div>
                    <button onClick={onClick}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </Center>
        </Section>
    )
}
