import { RotatingLines } from "react-loader-spinner";

export default function Spinner({ className = '', size = 24, width = 5, color = 'grey' }) {
    return (
        <RotatingLines
            height={size}
            width={size}
            color={color}
            strokeWidth={width}
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperClass={className}
        />
    )
}
