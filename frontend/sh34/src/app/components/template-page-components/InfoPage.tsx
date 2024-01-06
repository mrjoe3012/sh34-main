export const InfoPage = () => {

    return (
        <div className="">
            
            <div className="flex flex-row mb-8 justify-between">
                <div className="flex gap-x-20">
                    <div>
                        <p className="text-2xl"> Template Name </p>
                        <div className={`text-xl font-medium text-[#ACACAC] h-[60px] w-[250px] bg-[#E7E7E7] rounded-xl flex items-center pl-4`}>
                            <p> Example Name </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-2xl"> ID </p>
                        <div className={`text-center text-xl font-medium text-[#ACACAC] h-[60px] w-[100px] bg-[#E7E7E7] rounded-xl flex justify-center items-center`}>
                            <p> #1 </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-4 items-center"> 
                    <p className="text-2xl font-semibold"> Last Modified </p>
                    <p className="text-xl"> 06/01/24 </p>
                </div>
            </div>
            <div className="mb-10">
                <p className="text-2xl"> Template Description </p>
                <div className={`text-xl font-medium text-[#ACACAC] h-[250px] w-[600px] bg-[#E7E7E7] rounded-xl flex pt-5 pl-4`}>
                    <p> Template Description </p>
                </div>
            </div>
            <p className="text-2xl"> Tags </p>
            <div className="flex justify-between">
                <div>
                    <div className={`text-xl font-medium h-[60px] w-[700px] bg-[#E7E7E7] rounded-xl flex pl-4`}>
                        <div className="bg-[#B9B9B9] flex items-center my-2 px-5 rounded-lg"> <p>Tag</p> </div>
                    </div>
                </div>
                <div className={`text-center text-xl font-medium text-white h-[60px] w-[150px] bg-[#D72A2A] rounded-xl flex justify-center items-center border-[2px] border-slate-700`}>
                    <p> Delete </p>
                </div>
            </div>


        </div>
      )

  };