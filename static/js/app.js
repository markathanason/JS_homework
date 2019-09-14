var tableData = data;

var tbody = d3.select("tbody");

function buildTable(data){
    
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = tbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

function dateClick(){
    d3.event.preventDefault()
    
    let dateInput = d3.select("#datetime").property("value");
    let dateData = tableData;

    
    if (dateInput){        
        dateData = dateData.filter((row) => row.datetime === dateInput);
    }

    buildTable(dateData);
}

function cityClick(){
    d3.event.preventDefault()
    
    let cityInput = d3.select("#city").property("value");
    let cityData = tableData;

    
    if (cityInput){        
        cityData = cityData.filter((row) => row.city === cityInput);
    }

    buildTable(cityData);
}

function stateClick(){
    d3.event.preventDefault()
    
    let stateInput = d3.select("#state").property("value");
    let stateData = tableData;

    
    if (stateInput){        
        stateData = stateData.filter((row) => row.state === stateInput);
    }

    buildTable(stateData);
}

function countryClick(){
    d3.event.preventDefault()
    
    let countryInput = d3.select("#country").property("value");
    let countryData = tableData;

    
    if (countryInput){        
        countryData = countryData.filter((row) => row.country === countryInput);
    }

    buildTable(countryData);
}

function shapeClick(){
    d3.event.preventDefault()
    
    let shapeInput = d3.select("#shape").property("value");
    let shapeData = tableData;

    
    if (shapeInput){        
        shapeData = shapeData.filter((row) => row.shape === shapeInput);
    }

    buildTable(shapeData);
}

d3.selectAll("#date-filter").on("click", dateClick);
d3.selectAll("#city-filter").on("click", cityClick);
d3.selectAll("#state-filter").on("click", stateClick);
d3.selectAll("#country-filter").on("click", countryClick);
d3.selectAll("#shape-filter").on("click", shapeClick);

buildTable(tableData);