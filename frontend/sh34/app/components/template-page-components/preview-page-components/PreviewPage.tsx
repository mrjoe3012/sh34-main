import { useEffect, useState } from "react"
import $ from "jquery"

export const PreviewPage = () => {

    const [plotHTMLList, setPlotHTMLList] = useState()

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

        },
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

        }
    ]

    useEffect(()=> {
        fetch('/api/load-plot-previews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(testConfigList),
          })
          .then(response => response.text())
          .then(data => {
            $("#plot-preview").html(data)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    })

    return(
        <div className="flex flex-col justify-content items-center" id="plot-preview"></div>
    )

}