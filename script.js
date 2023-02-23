
function clearScreen1() {
    document.getElementById("result1").value = "";
}

function clearScreen2() {
    document.getElementById("result2").value = "";
}

function createTable(tableData, label, newDocument) {
    console.log(tableData)
    var x1 = newDocument.createElement("H4");
    var t1 = newDocument.createTextNode(label);
    x1.appendChild(t1);
    newDocument.body.appendChild(x1);
    var table = newDocument.createElement('table');

    var tableBody = newDocument.createElement('tbody');

    tableData.forEach(function (rowData) {
        //console.log(rowData)
        var row = newDocument.createElement('tr');
        //row.style.padding = "2px 5px 2px 5px";
        row.style.border = "1px solid black"
        rowData.forEach(function (cellData) {
            var cell = newDocument.createElement('td');
            cell.style.borderBottom = "1px solid #ddd"
            cell.appendChild(newDocument.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    table.style.border = "1px solid black"
    newDocument.body.appendChild(table);
}
// This function evaluates the expression and returns result
function getPrimesFunctionCall() {
    let start = document.getElementById("result1").value;
    let end = document.getElementById("result2").value;
    const startTime = Date.now();
    const [primesTable, allNumbersTable] = findPrimes(start, end);
    const endTime = Date.now();
    console.log(primesTable)
    if (primesTable.length > 1) {
        win1 = window.open()
        createTable(allNumbersTable, "Result Of All Numbers", win1.document)
        win2 = window.open()
        createTable(primesTable, "Prime Numbers", win2.document);
        let res = document.getElementById("res");
        str = `Found ${primesTable.length} primes in ${endTime - startTime} ms.`;
        res.innerText = str
    }
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
    let primesTable = [["Numbers", "Time in ms"]];
    let allNumbersTable = [["Numbers", "Result", "Time in ms"]]

    var endTime;
    for (let i = start; i <= end; i++) {
        const startTime = Date.now();
        if (isPrime(i)) {
            endTime = Date.now();
            allNumbersTable.push([i, "Prime", endTime - startTime])
            primesTable.push([i, endTime - startTime])
        }
        else {
            endTime = Date.now();
            allNumbersTable.push([i, "Normal", endTime - startTime])
        }
   }

    return [primesTable, allNumbersTable];
}
getPrimesFunctionCall()

