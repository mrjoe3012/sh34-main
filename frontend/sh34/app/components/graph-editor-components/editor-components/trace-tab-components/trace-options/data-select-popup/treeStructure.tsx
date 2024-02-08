export interface Option {
    name: string;
    tag: string;
}

export interface OptionsContainer {
    xoptions: Option[];
    yoptions: Option[];
}

export interface DataStructure {
    [key: string]: OptionsContainer | DataStructure;
}

export const treeStructure: DataStructure = {

    "Generator Downtimes": {
        xoptions: [
            {name:"Generator Name",tag:"generator_downtimes.GeneratorName"},
            {name:"Category",tag:"generator_downtimes.Category"},
            {name:"Subcategory",tag:"generator_downtimes.Subcategory"}
        ],
        yoptions: [
            {name:"Lost Production",tag:"generator_downtimes.LostProduction"},
            {name:"Lost Revenue",tag:"generator_downtimes.LostRevenue"},
            {name:"LostHours",tag:"generator_downtimes.LostHours"}
        ]
    },

    "Downtimes":{
        "Daily Losses": {
            xoptions: [
                {name:"Date",tag:"downtimes.dailyLosses.date"},
                {name:"Category",tag:"downtimes.dailyLosses.category"},
                {name:"Subcategory",tag:"donwtimes.dailyLosses.subcategory"}
            ],
            yoptions: [
                {name:"Production",tag:"downtimes.dailyLosses.production"},
                {name:"Hours",tag:"downtimes.dailyLosses.hours"},
                {name:"Revenue",tag:"downtimes.dailyLosses.revenue"}
            ]

        },
        "Monthly Losses": {
            xoptions: [
                {name:"Date",tag:"downtimes.monthlyLosses.date"},
                {name:"Category",tag:"downtimes.montlyLosses.category"},
                {name:"Subcategory",tag:"donwtimes.monthlyLosses.subcategory"}
            ],
            yoptions: [
                {name:"Production",tag:"downtimes.monthlyLosses.production"},
                {name:"Hours",tag:"downtimes.monthlyLosses.hours"},
                {name:"Revenue",tag:"downtimes.monthlyLosses.revenue"}
            ]
        }
    },

    "Generator Breakdown": {
        xoptions: [
            {name:"Generator Name",tag:"generator_breakdown.GeneratorName"}
        ],
        yoptions: [
            {name:"Operational Lost Production",tag:"generator_breakdown.OperationalLostProduction"},
            {name:"Operational Availability",tag:"generator_breakdown.OperationalAvailability"},
            {name:"Operational Lost Revenue",tag:"generator_breakdown.OperationalLostRevenue"},
            {name:"Contractual Availability",tag:"generator_breakdown.ContractualAvailability"},
            {name:"Operational Lost Hours",tag:"generator_breakdown.OperationalLostHours"},
            {name:"Production",tag:"generator_breakdown.Production"},
            {name:"Capacity Factor",tag:"generator_breakdown.CapacityFactor"}
        ]
    }
}