
interface MainButtonProps {
    buttonName: string;
    buttonColour: string;
    imgSrc: string;
}

export const MainButton = (props: MainButtonProps) => {
    const colorPropHolder = {
        buttonColor: props.buttonColour
    };

    return (
      <div className={`m-2 text-center text-white h-[50px] bg-[${colorPropHolder.buttonColor}] rounded-[5px] flex justify-center items-center`}>
        {props.buttonName}
      </div>
    );
  };