import { formatDate } from '../../../helper/date';

import Text from '../../../components/Text';
import Spacer from '../../../components/Spacer';
import VerifiedBatch from '../shared/VerifiedBatch';
import StarRatingDisplay from '../../../components/StarRatingDisplay';

import style from './style.module.css';

export default function ReviewCard({ rating, name, verified, review, createdAt }) {
    return (
        <div className={style.reviewCard}>
            <StarRatingDisplay rating={rating} showRating={false} size={22} />
            {
                name && (
                    <>
                        <Spacer />
                        <div className={style.nameWrap}>
                            <Text className='bold fs20'>{name}</Text>
                            {
                                verified && (
                                    <VerifiedBatch />
                                )
                            }
                        </div>
                    </>
                )
            }
            {
                review && (
                    <>
                        <Spacer />
                        <Text tag='q' className='fs16 black60'>{review}</Text>
                    </>
                )
            }
            {
                createdAt && (
                    <>
                        <Spacer />
                        <Text className="fs16 fw500 black60">Posted on {formatDate(createdAt)}</Text>
                    </>
                )
            }
        </div>
    )
}
