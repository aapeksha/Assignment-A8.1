// This function clear all the values
function clearScreen1() {
    document.getElementById("result1").value = "";
}

function clearScreen2() {
    document.getElementById("result2").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
function createTable(tableData) {
    //console.log(tableData)
    var table = document.createElement('table');
    
    var tableBody = document.createElement('tbody');
    
    tableData.forEach(function(rowData) {
        //console.log(rowData)
      var row = document.createElement('tr');
      //row.style.padding = "2px 5px 2px 5px";
      row.style.border="1px solid black"
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.style.borderBottom = "1px solid #ddd"
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    table.style.border="1px solid black"
    document.body.appendChild(table);
  }
// This function evaluates the expression and returns result
function getPrimesFunctionCall() {
    let start = document.getElementById("result1").value;
    let end = document.getElementById("result2").value;
    const startTime = Date.now();
    const [primesTable,allNumbersTable] = findPrimes(start, end);
    const endTime = Date.now();
    
    var x1 = document.createElement("H4");
    var t1 = document.createTextNode("Status of all Numbers");
    x1.appendChild(t1);
    document.body.appendChild(x1);
    createTable(allNumbersTable)
    var x2 = document.createElement("H4");
    var t2 = document.createTextNode("Prime Numbers");
    x2.appendChild(t2);
    document.body.appendChild(x2);
    createTable(primesTable);
    let res = document.getElementById("res");
    str=`Found ${primesTable.length} primes in ${endTime - startTime} ms.`;
    res.innerText = str
    //var x3 = document.createElement("H2");
    //str=`Found ${primesTable.length} primes in ${endTime - startTime} ms.`;
    //var t3 = document.createTextNode(str);
    //x3.appendChild(t3);
    document.body.appendChild(x3);
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimes(start, end) {
    let primesTable = [["Numbers","Time in ms"]];
    let allNumbersTable = [["Numbers","Result","Time in ms"]]
    
    var endTime;
    for (let i = start; i <= end; i++) {
        const startTime = Date.now();
        if (isPrime(i)) {
            endTime = Date.now();
            allNumbersTable.push([i,"Prime",endTime - startTime])
            primesTable.push([i,endTime - startTime])
        }
        else {
            endTime = Date.now();
            allNumbersTable.push([i,"Normal",endTime - startTime])
        }
        
        //console.log(`Found ${primes.length} primes so far. Time to find prime ${i}: ${endTime - startTime} ms.`);
    }

    return [primesTable,allNumbersTable];
}


