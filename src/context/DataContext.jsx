import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [excelData, setExcelData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [analysis, setAnalysis] = useState(null);

  const [dashboard, setDashboard] = useState(null);

  const [filters, setFilters] = useState([]);

  const [kpis, setKpis] = useState({});

  const [charts, setCharts] = useState([]);

  const [insights, setInsights] = useState([]);


  return (
    <DataContext.Provider
      value={{

        // Dataset
        excelData,
        setExcelData,

        filteredData,
        setFilteredData,


        // AI Analysis
        analysis,
        setAnalysis,


        // Complete Dashboard
        dashboard,
        setDashboard,


        // Dynamic Filters
        filters,
        setFilters,


        // KPI Data
        kpis,
        setKpis,


        // Generated Charts
        charts,
        setCharts,


        // AI Insights
        insights,
        setInsights,

      }}
    >
      {children}
    </DataContext.Provider>
  );
};