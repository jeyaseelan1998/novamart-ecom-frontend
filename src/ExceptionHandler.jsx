import api from './helper/api';
import DeviceDetector from 'device-detector-js';
import { ErrorBoundary } from 'react-error-boundary';

export default function ExceptionHandler({ children }) {

    const deviceDetector = new DeviceDetector();
    const deviceDetails = deviceDetector.parse(navigator.userAgent);

    const handleError = (error) => {
        const errorData = {
            message: error.message,
            stacktrace: error.stack,
            device_details: JSON.stringify(deviceDetails),
            url: window.location.pathname,
            type: 'website',
        }
        api.post('/error/create', errorData);
    };

    if (!import.meta.env.PROD) {
        return (
            <>
                {children}
            </>
        )
    }

    return (
        <ErrorBoundary
            FallbackComponent={({ resetErrorBoundary }) => (
                <>
                    Oops...
                    <a onClick={resetErrorBoundary} href='/'>Home</a>
                </>
            )}
            onError={handleError}
        >
            {children}
        </ErrorBoundary>
    )
}