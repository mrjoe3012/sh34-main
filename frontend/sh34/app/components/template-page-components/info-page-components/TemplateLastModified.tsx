interface TemplateLastModifiedProps {
    lastModified: string;
};

export const TemplateLastModified = (props: TemplateLastModifiedProps) => {
    const lastModified = props.lastModified;
    return (
        <div className="flex gap-x-4 items-center"> 
            <p className="text-2xl font-semibold"> Last Modified </p>
            <p className="text-xl"> {lastModified} </p>
        </div>
    );
}