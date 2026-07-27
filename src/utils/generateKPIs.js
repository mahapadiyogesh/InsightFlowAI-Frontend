export function generateKPIs(data) {

  if (!data || data.length === 0) {

    return {
      cards: []
    };

  }


  const columns = Object.keys(data[0]);



  const numericColumns = columns.filter((column) => {

    return data.some(
      row =>
        !isNaN(
          Number(row[column])
        )
      );

  });



  const textColumns = columns.filter((column)=>{

    return data.some(
      row =>
        typeof row[column] === "string"
    );

  });



  let kpis = [];



  // Total Records

  kpis.push({

    title:"Total Records",

    value:data.length,

    type:"count"

  });





  // Numeric Analysis


  if(numericColumns.length > 0){


    const mainNumber = numericColumns[0];



    const total = data.reduce(

      (sum,row)=>

        sum + Number(row[mainNumber] || 0),

      0

    );



    const average =
      total / data.length;



    const maximum = Math.max(

      ...data.map(

        row => Number(row[mainNumber] || 0)

      )

    );



    kpis.push({

      title:`Total ${mainNumber}`,

      value:Math.round(total),

      type:"sum"

    });



    kpis.push({

      title:`Average ${mainNumber}`,

      value:Math.round(average),

      type:"average"

    });



    kpis.push({

      title:`Highest ${mainNumber}`,

      value:maximum,

      type:"max"

    });


  }





  // Category Count


  if(textColumns.length > 0){


    const categoryColumn=textColumns[0];



    const uniqueValues = new Set(

      data.map(

        row=>row[categoryColumn]

      )

    );



    kpis.push({

      title:`Unique ${categoryColumn}`,

      value:uniqueValues.size,

      type:"unique"

    });


  }




  return {

    cards:kpis

  };


}