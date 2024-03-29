import { useEffect, useState } from "react"

interface TwoTabSwitcherProps {
    switchTabFunction: (someComponent: JSX.Element) => void;
    firstTabContent: JSX.Element;
    secondTabContent: JSX.Element;
    switcherLabel1: string;
    switcherLabel2: string;
    firstOptionFunction: ()=>void;
    secondOptionFunction: ()=>void;
    tabOnRender?: number;
}

export const TwoTabSwitcher = (props : TwoTabSwitcherProps) => {

    const [option1Selected, setOption1Selected] = useState(true);
    const [option2Selected, setOption2Selected] = useState(false);

    useEffect(()=>{

        console.log("in twotabswitcher tabonrender is: " + props.tabOnRender)

        if (props.tabOnRender==0) {
            setOption1Selected(true);
            setOption2Selected(false);
        } else if (props.tabOnRender==1) {
            setOption1Selected(false);
            setOption2Selected(true);
        }

    },[props.tabOnRender])

    const handleOption1Clicked = () => {
        setOption1Selected(true);
        setOption2Selected(false);
        props.firstOptionFunction()
        props.switchTabFunction(props.firstTabContent)
    }

    const handleOption2Clicked = () => {
        setOption1Selected(false);
        setOption2Selected(true);
        props.secondOptionFunction()
        props.switchTabFunction(props.secondTabContent)
    }

    return (
        <div className="ml-3 mr-3 h-[35px] bg-[#EAEAEA] border-2 border-[#B3B3B3] rounded flex items-center mb-2">
            <button className={`w-[50%] flex-grow text-center h-full rounded ${option1Selected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleOption1Clicked}>{props.switcherLabel1}</button>
            <div className={`bg-gray-300 w-[2px] h-[70%]`}></div>
            <button className={`w-[50%] flex-grow text-center h-full rounded ${option2Selected ? 'text-RES_ORANGE font-semibold' : ''}`} onClick={handleOption2Clicked}>{props.switcherLabel2}</button>
        </div>
    )
}