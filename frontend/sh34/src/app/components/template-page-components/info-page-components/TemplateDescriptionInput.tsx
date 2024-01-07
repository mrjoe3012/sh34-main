export const TemplateDescriptionInput = () => {
    return (
        <div className="mb-10">
            <p className="text-2xl"> Template Description </p>
            <textarea 
            placeholder="Enter Description" 
            maxLength={300} 
            className="text-xl font-medium placeholder-[#ACACAC] h-[250px] w-[600px] bg-[#E7E7E7] rounded-xl pt-5 px-4 outline-none focus:ring-2 focus:ring-RES_ORANGE" />
        </div>
    );
}