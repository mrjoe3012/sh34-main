
interface MainButtonProps {
    buttonColour: string;
    buttonName: string;
    imgSrc: string;
}

export const MainButton = (props: MainButtonProps) => {

    return (
      <div className={`m-2 text-center text-xl text-white font-semibold h-[60px] rounded-[5px] flex justify-center items-center ${props.buttonColour} `}>
        {props.buttonName}
      </div>
    );
  };