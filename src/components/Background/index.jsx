import { useEffect, useRef, useState } from "react";

import { getIcon } from "../../helper/icons";
import Spinner from "../Spinner";

import style from "./style.module.css";

const BrokenImage = ({ className, sizer }) => (
    <>
        {sizer && <div className={style.sizer} />}
        <div className={style.bsz}>
            <div className={`${style.bgImage} ${className || ""}`}>
                <div className={style.fa}>
                    <i className={getIcon('imageSlash')} />
                </div>
            </div>
        </div>
    </>
);

const NormalImage = ({
    src,
    className,
    alt,
    cPosition,
    showCaption,
    caption,
}) => (
    <div className={style.bsz}>
        <div
            className={`${style.bgImage} ${className || ""}`}
            style={{ backgroundImage: `url(${src})` }}
        >
            <img src={src} alt={alt} />
        </div>

        {showCaption && caption && (
            <div
                className={`${style.captionWrap} ${style[cPosition] || ""
                    }`}
            >
                <p className={style.caption}>{caption}</p>
            </div>
        )}
    </div>
);

const LazyImage = ({
    src,
    className,
    alt,
    sizer,
    defaultSize = 50,
    callBack,
    isLoad,
    cPosition,
    showCaption,
    caption,
    width = 0,
    height = 0,
    spinnerSize = 24
}) => {
    const [loaded, setLoaded] = useState(0);
    const [dimension, setDimension] = useState([width, height]);
    const [isIntersecting, setIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isIntersecting || loaded !== 0) return;

        const img = new Image();

        img.onload = () => {
            setLoaded(1);

            setDimension([width || img.width, height || img.height]);

            if (typeof isLoad === "function") {
                isLoad(true);
            }

            if (typeof callBack === "function") {
                const { innerWidth, innerHeight } = window;

                let width = innerWidth;
                let height = (img.height * width) / img.width;

                if (height > innerHeight) {
                    height = innerHeight;
                    width = (img.width * height) / img.height;
                }

                callBack(width, height);
            }
        };

        img.onerror = () => {
            setLoaded(2);
        };

        img.src = src;
    }, [isIntersecting, loaded, src, callBack, isLoad]);

    return (
        <>
            {sizer && (
                <div
                    className={style.sizer}
                    style={{
                        paddingTop: `${dimension[0] && dimension[1]
                            ? (dimension[1] * 100) / dimension[0]
                            : defaultSize
                            }%`,
                    }}
                />
            )}

            <div className={style.bsz} ref={ref}>
                <div
                    className={`${style.bgImage} ${className || ""
                        } ${loaded === 0 ? style.loading : ""}`}
                    style={{
                        backgroundImage:
                            loaded === 1 ? `url(${src})` : "none",
                    }}
                >
                    {loaded === 1 && <img src={src} alt={alt} />}

                    {loaded === 2 && (
                        <div className={style.fa}>
                            <i class={getIcon('circleExclamation')}></i>
                        </div>
                    )}
                </div>

                {loaded === 0 && (
                    <div className={style.spinner}>
                        <Spinner size={spinnerSize} />
                    </div>
                )}

                {showCaption && caption && loaded === 1 && (
                    <div
                        className={`${style.captionWrap} ${style[cPosition] || ""
                            }`}
                    >
                        <p className={style.caption}>{caption}</p>
                    </div>
                )}
            </div>
        </>
    );
};

const getLazy = (lazyProp) => {
    const query = new URLSearchParams(window.location.search);

    return query.get("lazy") === "false" ? false : lazyProp;
};

// eslint-disable-next-line no-unused-vars
const getUrl = ({ url, s3Key }) => {
    if (url) return url;
    return `${import.meta.env.VITE_CDN_URL}/${s3Key}`;
}

const Background = ({
    url,
    className = "",
    altText = "",
    lazy: lazyProp = true,
    fallback = true,
    retainAspectRatio = false,
    callBack = false,
    isLoad = false,
    defaultSize,
    cPosition = "topLeft",
    showCaption = false,
    caption = "",
    width,
    height,
    s3Key,
}) => {
    const lazy = getLazy(lazyProp);

    const srcUrl = encodeURI(getUrl({ url, s3Key }));

    if (!srcUrl) {
        return fallback ? (
            <BrokenImage sizer={retainAspectRatio} />
        ) : null;
    }

    if (!lazy && !retainAspectRatio) {
        return (
            <NormalImage
                src={srcUrl}
                className={className}
                alt={altText}
                cPosition={cPosition}
                showCaption={showCaption}
                caption={caption}
            />
        );
    }

    return (
        <LazyImage
            src={srcUrl}
            className={className}
            alt={altText}
            sizer={retainAspectRatio}
            defaultSize={defaultSize}
            callBack={callBack}
            isLoad={isLoad}
            cPosition={cPosition}
            showCaption={showCaption}
            caption={caption}
            width={width}
            height={height}
        />
    );
};

export default Background;