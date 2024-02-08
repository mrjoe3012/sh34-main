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
    },

    "Indicator Breakdown": {
        "Production":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.Production.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.Production.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.Production.dateCoverage"}
            ]
        },
        "Production Metered":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.ProductionMetered.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.ProductionMetered.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.ProductionMetered.dateCoverage"}
            ]
        },
        "SCADA Production":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.SCADAProduction.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.SCADAProduction.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.SCADAProduction.dateCoverage"}
            ]
        },
        "Consumption Metered":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.ConsumptionMetered.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.ConsumptionMetered.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.ConsumptionMetered.dateCoverage"}
            ]
        },
        "Ideal Production":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.IdealProduction.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.IdealProduction.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.IdealProduction.dateCoverage"}
            ]
        },
        "Operational Lost Production":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.OperationalLostProduction.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.OperationalLostProduction.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.OperationalLostProduction.dateCoverage"}
            ]
        },
        "Operational Lost Hours":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.OperationalLostHours.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.OperationalLostHours.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.OperationalLostHours.dateCoverage"}
            ]
        },
        "Operational Lost Revenue":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.OperationalLostRevenue.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.OperationalLostRevenue.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.OperationalLostRevenue.dateCoverage"}
            ]
        },
        "Running Lost Production":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.RunningLostProduction.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.RunningLostProduction.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.RunningLostProduction.dateCoverage"}
            ]
        },
        "Operational Availability":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.OperationalAvailability.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.OperationalAvailability.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.OperationalAvailability.dateCoverage"}
            ]
        },
        "Site Availability":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.SiteAvailability.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.SiteAvailability.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.SiteAvailability.dateCoverage"}
            ]
        },
        "Wind Speed Mean":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.WindSpeedMean.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.WindSpeedMean.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.WindSpeedMean.dateCoverage"}
            ]
        },
        "Temperature Mean":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.TemperatureMean.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.TemperatureMean.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.TemperatureMean.dateCoverage"}
            ]
        },
        "Revenue From Production":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.RevenueFromProduction.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.RevenueFromProduction.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.RevenueFromProduction.dateCoverage"}
            ]
        },
        "Number of Contractor Hours":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.NumberOfContractorHours.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.NumberOfContractorHours.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.NumberOfContractorHours.dateCoverage"}
            ]
        },
        "Budget Production":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.BudgetProduction.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.BudgetProduction.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.BudgetProduction.dateCoverage"}
            ]
        },
        "Budget Production Metered":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.BudgetProductionMetered.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.BudgetProductionMetered.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.BudgetProductionMetered.dateCoverage"}
            ]
        },
        "Budget Operational Availability":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.BudgetOperationalAvailability.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.BudgetOperationalAvailability.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.BudgetOperationalAvailability.dateCoverage"}
            ]
        },
        "Budget Site Availability":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.BudgetSiteAvailability.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.BudgetSiteAvailability.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.BudgetSiteAvailability.dateCoverage"}
            ]
        },
        "Budget Contractual Availability by OM":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.BudgetContractualAvailabilityByOM.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.BudgetContractualAvailabilityByOM.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.BudgetContractualAvailabilityByOM.dateCoverage"}
            ]
        },
        "Budget Contractual Availability by AM":{
            xoptions: [
                {name:"Date", tag:"breakdown_by_indicator.BudgetContractualAvailabilityByAM.date"}
            ],
            yoptions: [
                {name:"Value", tag:"breakdown_by_indicator.BudgetContractualAvailabilityByAM.value"},
                {name:"Data Coverage", tag:"breakdown_by_indicator.BudgetContractualAvailabilityByAM.dateCoverage"}
            ]
        },



    }


}