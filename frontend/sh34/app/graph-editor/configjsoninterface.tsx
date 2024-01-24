
export interface Config {

    numTraces: number;
    traces: Array<TraceType>;

    numAnnotations: number;
    annotations: Array<AnnotationType>; 

    generalOptions: GeneralOptionsType;

    labellingOptions: LabellingOptionsType;
      
    visualOptions: VisualOptionsType;
}


export interface AnnotationType {
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
    arrowWidth: number,
    styling: {
        fontColour: string,
        fontSize: number,
        typeface: string
    }
}

export interface TraceType {
    id: number;
    name: string;
    plotType: string;
    plotIndicator: string;
    markerColour: string;
    orientation: string;
}

export interface GeneralOptionsType {
    plotWidth: string;
    plotHeight: string;
    displayXAxisLines: boolean;
    displayYAxisLines: boolean;
    xAxisScale: string;
    yAxisScale: string;
}

export interface LabellingOptionsType {
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
}

export interface VisualOptionsType {
    colour: {
        plotBackgroundColourHex: string,
        plotMarginColourHex: string
    }
}