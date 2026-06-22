import Text from '../Text';
import styles from './style.module.css';

export const PreciseStar = ({
    fillPercentage,
    size = 32,
    activeColor = "#facc15",
    inactiveColor = "#e5e7eb"
}) => {
    return (
        <div
            className={styles.star}
            style={{
                width: size,
                height: size,
            }}
        >
            {/* Background Star */}
            <svg
                viewBox="0 0 24 24"
                fill={inactiveColor}
                className={styles.starSvg}
            >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>

            {/* Filled Star */}
            <div
                className={styles.fill}
                style={{
                    width: `${fillPercentage}%`,
                }}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill={activeColor}
                    style={{
                        width: size,
                        height: size,
                    }}
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            </div>
        </div>
    );
};

const StarRatingDisplay = ({
    rating = 4.5,
    maxRating = 5,
    size = 32,
    activeColor = '#FFC633',
    inactiveColor = '#e5e7eb',
    showRating = true
}) => {
    return (
        <div className={styles.ratingWrapper}>
            <div className={styles.rating}>
                {Array.from({ length: maxRating }).map((_, index) => {
                    const starValue = index + 1;

                    let fillPercentage = 0;

                    if (rating >= starValue) {
                        fillPercentage = 100;
                    } else if (rating > index) {
                        fillPercentage = (rating - index) * 100;
                    }

                    return (
                        <PreciseStar
                            key={index}
                            fillPercentage={fillPercentage}
                            size={size}
                            activeColor={activeColor}
                            inactiveColor={inactiveColor}
                        />
                    );
                })}
            </div>
            {
                showRating && (
                    <div>
                        <Text className="fs14">
                            <span>{rating}</span> <span>/</span> <span className={styles.maxRating}>{maxRating}</span>
                        </Text>
                    </div>
                )
            }
        </div>
    );
};

export default StarRatingDisplay;