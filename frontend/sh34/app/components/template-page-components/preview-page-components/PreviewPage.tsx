import { useEffect, useState } from "react"
import $ from "jquery"


export const PreviewPage = () => {

    const testConfigList = [
        {

            "numTraces": 0,
            "traces": [
                {
                    "id": 0,
                    "name": "New Trace",
                    "plotType": "Bar",
                    "plotIndicator": "/breakdown_by_indicator/TemperatureMean",
                    "markerColour": "#ffac05",
                    "orientation": "v"
                }
            ],

            "numAnnotations": 0,
            "annotations": [

            ],

            "generalOptions": {
                "plotWidth": "800",
                "plotHeight": "600",
                "displayXAxisLines": false,
                "displayYAxisLines": false,
                "xAxisScale": "linear",
                "yAxisScale": "linear"
            },

            "labellingOptions": {
                "title": {
                    "plotTitle": "Plot Title",
                    "styling": {
                        "currentStylingMode": "default",
                        "defaultFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        },
                        "customFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        }
                    }
                },
                "xAxis": {
                    "xAxisText": "X Axis",
                    "styling": {
                        "currentStylingMode": "default",
                        "defaultFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        },
                        "customFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        }
                    },
                    "tickLabels": {
                        "tickAngle": 0,
                        "tickPosition": "bottom",
                        "styling": {
                            "currentStylingMode": "default",
                            "defaultFontStyle": {
                                "fontColour": "#000000",
                                "fontSize": 16,
                                "typeface": "Arial"
                            },
                            "customFontStyle": {
                                "fontColour": "#000000",
                                "fontSize": 16,
                                "typeface": "Arial"
                            }
                        }
                    }
                },
                "yAxis": {
                    "yAxisText": "Y Axis",
                    "styling": {
                        "currentStylingMode": "default",
                        "defaultFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        },
                        "customFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        }
                    },
                    "tickLabels": {
                        "tickAngle": 0,
                        "tickPosition": "left",
                        "styling": {
                            "currentStylingMode": "default",
                            "defaultFontStyle": {
                                "fontColour": "#000000",
                                "fontSize": 16,
                                "typeface": "Arial"
                            },
                            "customFontStyle":{
                                "fontColour": "#000000",
                                "fontSize": 16,
                                "typeface": "Arial"
                            }
                        }
                    }
                }
            },

            "visualOptions": {
                "colour":{
                    "plotBackgroundColourHex": "#e5ecf6",
                    "plotMarginColourHex": "#FFFFFF"
                }
            }

        },{

            "numTraces": 0,
            "traces": [
                {
                    "id": 0,
                    "name": "New Trace",
                    "plotType": "Bar",
                    "plotIndicator": "/breakdown_by_indicator/TemperatureMean",
                    "markerColour": "#ffac05",
                    "orientation": "v"
                }
            ],

            "numAnnotations": 0,
            "annotations": [

            ],

            "generalOptions": {
                "plotWidth": "800",
                "plotHeight": "600",
                "displayXAxisLines": false,
                "displayYAxisLines": false,
                "xAxisScale": "linear",
                "yAxisScale": "linear"
            },

            "labellingOptions": {
                "title": {
                    "plotTitle": "Plot Title",
                    "styling": {
                        "currentStylingMode": "default",
                        "defaultFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        },
                        "customFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        }
                    }
                },
                "xAxis": {
                    "xAxisText": "X Axis",
                    "styling": {
                        "currentStylingMode": "default",
                        "defaultFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        },
                        "customFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        }
                    },
                    "tickLabels": {
                        "tickAngle": 0,
                        "tickPosition": "bottom",
                        "styling": {
                            "currentStylingMode": "default",
                            "defaultFontStyle": {
                                "fontColour": "#000000",
                                "fontSize": 16,
                                "typeface": "Arial"
                            },
                            "customFontStyle": {
                                "fontColour": "#000000",
                                "fontSize": 16,
                                "typeface": "Arial"
                            }
                        }
                    }
                },
                "yAxis": {
                    "yAxisText": "Y Axis",
                    "styling": {
                        "currentStylingMode": "default",
                        "defaultFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        },
                        "customFontStyle": {
                            "fontColour": "#000000",
                            "fontSize": 16,
                            "typeface": "Arial"
                        }
                    },
                    "tickLabels": {
                        "tickAngle": 0,
                        "tickPosition": "left",
                        "styling": {
                            "currentStylingMode": "default",
                            "defaultFontStyle": {
                                "fontColour": "#000000",
                                "fontSize": 16,
                                "typeface": "Arial"
                            },
                            "customFontStyle":{
                                "fontColour": "#000000",
                                "fontSize": 16,
                                "typeface": "Arial"
                            }
                        }
                    }
                }
            },

            "visualOptions": {
                "colour":{
                    "plotBackgroundColourHex": "#e5ecf6",
                    "plotMarginColourHex": "#FFFFFF"
                }
            }

        }
    ]

    const [plotHTMLList, setPlotHTMLList] = useState<string[]>([]); // Initialize as an empty array

    useEffect(() => {
        fetch('/api/load-plot-previews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testConfigList),
        })
        .then(response => response.json())
        .then(htmlList => {
            setPlotHTMLList(htmlList);
            $("#plot-preview").html(htmlList)
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    }, []); // Empty dependency array for the effect to run once after the initial render

    // New useEffect to log the state after it's been updated
    useEffect(() => {
        console.log("plotHTMLList updated to:");
        console.log(plotHTMLList);

        console.log("Type of plotHTMLList")
        console.log(typeof plotHTMLList)
    }, [plotHTMLList]); // This effect runs whenever plotHTMLList changes



    return (
        <div className="flex flex-col justify-content items-center" id="plot-preview">

        </div>
    );


}

interface PlotPreviewProps {
    html: string;
}

export const PlotPreview = ({ html }: PlotPreviewProps) => {
    return (
        <div className="rounded-lg border-4 border-gray-400 bg-[#edeef2]" id="plot-preview-content" dangerouslySetInnerHTML={{ __html: html }}>
        </div>
    );
};