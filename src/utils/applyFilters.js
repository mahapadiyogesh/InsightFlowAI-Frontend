export function applyFilters(data, activeFilters) {

  if (!data || data.length === 0) {
    return [];
  }


  if (!activeFilters || Object.keys(activeFilters).length === 0) {
    return data;
  }



  return data.filter((row) => {


    return Object.keys(activeFilters).every((column) => {


      const selectedValue = activeFilters[column];


      if (
        !selectedValue ||
        selectedValue === "All"
      ) {
        return true;
      }



      const rowValue = row[column];



      if (rowValue === undefined || rowValue === null) {
        return false;
      }



      return String(rowValue)
        .trim()
        .toLowerCase()
        ===
        String(selectedValue)
          .trim()
          .toLowerCase();


    });


  });


}