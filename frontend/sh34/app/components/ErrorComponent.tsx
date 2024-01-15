// wrapper around next/error with 'use client' at the top
// so that this can be returned from server components
'use client'
import Error from 'next/error';

interface ErrorComponentProps {
    statusCode: number;
};

export function ErrorComponent(props: ErrorComponentProps) {
    const code = props.statusCode;
    return <Error statusCode={code}/>
}
