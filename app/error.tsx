'use client'

interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({error, reset}: Props) => {
    console.log('Error', error);
    
    return (
        <div>
            <h1>Unspected Error</h1>
            <button className='btn ' onClick={() => reset()}>re try</button>
        </div>
    );
};

export default ErrorPage;