import { isEmpty, map, size } from 'lodash';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getIcon } from '../../../helper/icons';
import Text from '../../../components/Text';
import ReviewCard from '../shared/ReviewCard';
import Center from '../../../components/Center';
import Spacer from '../../../components/Spacer';
import Section from '../../../components/Section';
import Link from '../../../components/Button/Link';

import style from './style.module.css';

export default function TestimonialSlider({ list, title }) {
    return (
        <Section>
            <Center>
                <div className={style.titleWrap}>
                    {
                        title && (
                            <Text tag="h2" className="uppercase bold secondaryFont" fs={48}>{title}</Text>
                        )
                    }
                    {
                        size(list) > 0 && (
                            <div className={style.navLinks}>
                                <Link className={style.navLeft}>
                                    <i className={getIcon('arrowLeft')}></i>
                                </Link>
                                <Link className={style.navRight}>
                                    <i className={getIcon('arrowRight')}></i>
                                </Link>
                            </div>
                        )
                    }
                </div>
                {size(list) > 0 && (
                    <>
                        <Spacer size={40} />
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: `.${style.navLeft}`,
                                nextEl: `.${style.navRight}`,
                                disabledClass: style.disabled,
                            }}
                            breakpoints={{
                                1280: {
                                    slidesPerView: 3
                                },
                                768: {
                                    slidesPerView: 2
                                },
                            }}
                        >
                            {
                                map(list, (item, index) => {
                                    if (isEmpty(item)) return null;
                                    return (
                                        <SwiperSlide key={index} className={style.swiperSlide}>
                                            <ReviewCard
                                                {...item}
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </>
                )}
            </Center>
        </Section>
    )
}
