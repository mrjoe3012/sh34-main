import { useEffect, useState } from "react"
import { OptionComponentTitle } from "@app/components/graph-editor-components/editor-components/OptionComponentTitle"
import { GenericTextInputOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTextInputOption"
import { TitleLabelDefaultMode } from "@app/components/graph-editor-components/editor-components/labelling-tab-components/labelling-options/title-label-components/TitleLabelDefaultMode"
import { TitleLabelCustomMode } from "@app/components/graph-editor-components/editor-components/labelling-tab-components/labelling-options/title-label-components/TitleLabelCustomMode"
import { TwoTabSwitcher } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTwoTabSwitcher"

import { useConfig } from "@app/graph-editor/ConfigContext"

export const TitleLabelOptions = () => {

    const { config, setConfig } = useConfig();
    const [titleOptionMode, setTitleOptionMode] = useState(<TitleLabelDefaultMode />)
    const [tabOnRender, setTabOnRender] = useState(-1);

    const changeTitleText = (inputValue: string) => {
        // Create a deep copy of config and update the specific value
        const newConfig = { ...config };
        newConfig.labellingOptions.title.plotTitle = inputValue;
        setConfig(newConfig); // Update the config context
        console.log("Changed title text to " + inputValue);
    }

    const switchToDefault = () => {
        const newConfig = { ...config };
        newConfig.labellingOptions.title.styling.currentStylingMode = "default";
        setConfig(newConfig); // Update the config context
    }

    const switchToCustom = () => {
        const newConfig = { ...config };
        newConfig.labellingOptions.title.styling.currentStylingMode = "custom";
        setConfig(newConfig); // Update the config context
    }

    // On Component Load, if Custom Mode is Selected, Switch to Custom Tab
    useEffect(()=> {
        if (config["labellingOptions"]["title"]["styling"]["currentStylingMode"]=="default") {
            setTitleOptionMode(<TitleLabelDefaultMode />)
            setTabOnRender(0);
        } else if (config["labellingOptions"]["title"]["styling"]["currentStylingMode"]=="custom") {
            setTitleOptionMode(<TitleLabelCustomMode />)
            setTabOnRender(1);
        }
        console.log("tabonrender: " + tabOnRender)
    }, [])

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
                <OptionComponentTitle optionName="Title Label Options" />
                <div className="mb-2"><GenericTextInputOption contentOnRender={config["labellingOptions"]["title"]["plotTitle"]} plotFunction={changeTitleText} placeholder="" labelName={"Text"} displayLabel={true} width="" textPos=""/></div>
                <div className="mx-3"><OptionComponentTitle optionName="Font Options" /></div>
                <TwoTabSwitcher
                                switchTabFunction={setTitleOptionMode}
                                firstTabContent={<TitleLabelDefaultMode />}
                                secondTabContent={<TitleLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"
                                firstOptionFunction={switchToDefault}
                                secondOptionFunction={switchToCustom}
                                tabOnRender={tabOnRender}
                                 />
                {titleOptionMode}
        </div>
    )
}