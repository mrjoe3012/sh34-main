
interface MainButtonProps {
    buttonColour: string;
    buttonName: string;
    imgSrc: string;
    onClick: () => void;
}

export const MainButton = (props: MainButtonProps) => {

    return (
      <button onClick={props.onClick} className={`m-2 text-center text-xl text-white font-semibold h-[60px] w-[90%] rounded-[5px] flex justify-center items-center ${props.buttonColour} `}>
        {props.buttonName}
      </button>
    );
  };