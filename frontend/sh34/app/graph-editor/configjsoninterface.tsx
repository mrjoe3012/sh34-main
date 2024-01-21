export interface Config {
    traces: Array<{
        id: number;
        name: string;
        plotType: string;
        plotIndicator: string;
        markerColour: string;
        orientation: string;
    }>;

    annotations: Array<{
        id: number;
        name: string;
        xPos: number;
        yPos: number;
        xref: string;
        yref: string;
        text: string;
        showArrow: boolean;
        arrowColour: string,
        arrowOffsetX: number,
        arrowOffsetY: number,
        styling: {
            fontColour: string,
            fontSize: number,
            typeface: string
        }
    }>; 

    generalOptions: {
        plotWidth: string;
        plotHeight: string;
        displayXAxisLines: boolean;
        displayYAxisLines: boolean;
        xAxisScale: string;
        yAxisScale: string;
    };

    labellingOptions: {
        title: {
            plotTitle: string;
            styling: {
                currentStylingMode: string;
                defaultFontStyle: {
                    fontColour: string;
                    fontSize: number;
                    typeface: string
                },
                customFontStyle: {
                    fontColour: string;
                    fontSize: number;
                    typeface: string;
                }
            }
        },
        xAxis: {
            xAxisText: string;
            styling: {
                currentStylingMode: string;
                defaultFontStyle: {
                    fontColour: string;
                    fontSize: number;
                    typeface: string
                },
                customFontStyle: {
                    fontColour: string;
                    fontSize: number;
                    typeface: string;
                }
            }
            tickLabels: {
                tickAngle: number;
                tickPosition: string;
                styling: {
                    currentStylingMode: string;
                    defaultFontStyle: {
                        fontColour: string;
                        fontSize: number;
                        typeface: string
                    },
                    customFontStyle: {
                        fontColour: string;
                        fontSize: number;
                        typeface: string;
                    }
                }
            }
        },
        yAxis: {
            yAxisText: string;
            styling: {
                currentStylingMode: string;
                defaultFontStyle: {
                    fontColour: string;
                    fontSize: number;
                    typeface: string
                },
                customFontStyle: {
                    fontColour: string;
                    fontSize: number;
                    typeface: string;
                }
            }
            tickLabels: {
                tickAngle: number;
                tickPosition: string;
                styling: {
                    currentStylingMode: string;
                    defaultFontStyle: {
                        fontColour: string;
                        fontSize: number;
                        typeface: string
                    },
                    customFontStyle: {
                        fontColour: string;
                        fontSize: number;
                        typeface: string;
                    }
                }
            }
        }
    },
      
    visualOptions: {
        colour: {
            plotBackgroundColourHex: string,
            plotMarginColourHex: string
        }
    }
}