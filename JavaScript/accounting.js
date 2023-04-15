'use strict';

/**********************************************************************************/
//readData
let retrievedData = JSON.parse(localStorage.getItem('Employee'));
console.log(retrievedData);

/*********************************************************************************/
// Inatialization variables
let totalAdminSalary = 0;
let adminCount = 0;

let totalMrktSalary = 0;
let mrktCount = 0;

let totalDevSalary = 0;
let devCount = 0;

let totalFinSalary = 0;
let finCount = 0;

let employeesCount = 0;
let totalSalary = 0;
/********************************************************************************/
function EmployessTable(retrievedData) {
    for (let i = 0; i < retrievedData.length; i++) {

        if ((retrievedData[i].department == '1' || retrievedData[i].department == 'Administration') && retrievedData[i].salary != 0) {
            adminCount++;
            totalAdminSalary += retrievedData[i].salary;
        }

        else if ((retrievedData[i].department == '2' || retrievedData[i].department == 'Marketing') && retrievedData[i].salary != 0) {
            mrktCount++;
            totalMrktSalary += retrievedData[i].salary;
        }


        else if ((retrievedData[i].department == '3' || retrievedData[i].department == 'Development') && retrievedData[i].salary != 0) {
            devCount++;
            totalDevSalary += retrievedData[i].salary;
        }


        else if ((retrievedData[i].department == '4' || retrievedData[i].department == 'Fainance') && retrievedData[i].salary != 0) {
            finCount++;
            totalFinSalary += retrievedData[i].salary;
        }

    }
    employeesCount = adminCount + mrktCount + devCount + finCount;
    totalSalary = totalAdminSalary + totalDevSalary + totalFinSalary + totalMrktSalary;
    renderTable();
}

EmployessTable(retrievedData);

function renderTable() {
    let tableEl = document.getElementById('Administration');
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let numberEl = document.createElement('td');
    numberEl.textContent = `Number of employess = ${adminCount}`;
    trEl.appendChild(numberEl);

    let salaryEl = document.createElement('td');
    salaryEl.textContent = `Total salary = ${totalAdminSalary}`;
    trEl.appendChild(salaryEl);

    let avgEl = document.createElement('td');
    avgEl.textContent = `Average salary = ${totalAdminSalary / adminCount}`;
    trEl.appendChild(avgEl);
    //
    let tableEl1 = document.getElementById('Marketing');
    let trEl1 = document.createElement('tr');
    tableEl1.appendChild(trEl1);

    let numberEl1 = document.createElement('td');
    numberEl1.textContent = `Number of employess = ${mrktCount}`;
    trEl1.appendChild(numberEl1);

    let salaryEl1 = document.createElement('td');
    salaryEl1.textContent = `Total salary = ${totalMrktSalary}`;
    trEl1.appendChild(salaryEl1);

    let avgEl1 = document.createElement('td');
    avgEl1.textContent = `Average salary = ${totalMrktSalary/ mrktCount}`;
    trEl1.appendChild(avgEl1);
    //
    let tableEl2 = document.getElementById('Development');
    let trEl2 = document.createElement('tr');
    tableEl2.appendChild(trEl2);

    let numberEl2 = document.createElement('td');
    numberEl2.textContent = `Number of employess = ${devCount}`;
    trEl2.appendChild(numberEl2);


    let salaryEl2 = document.createElement('td');
    salaryEl2.textContent = `Total salary = ${totalDevSalary}`;
    trEl2.appendChild(salaryEl2);

    let avgEl2 = document.createElement('td');
    avgEl2.textContent = `Average salary = ${totalDevSalary / devCount}`;
    trEl2.appendChild(avgEl2);
    //
    let tableEl3 = document.getElementById('Fainance');
    let trEl3 = document.createElement('tr');
    tableEl3.appendChild(trEl3);

    let numberEl3 = document.createElement('td');
    numberEl3.textContent = `Number of employess = ${finCount}`;
    trEl3.appendChild(numberEl3);

    let salaryEl3 = document.createElement('td');
    salaryEl3.textContent = `Total salary = ${totalFinSalary}`;
    trEl3.appendChild(salaryEl3);

    let avgEl3 = document.createElement('td');
    avgEl3.textContent = `Average salary = ${totalFinSalary / finCount}`;
    trEl3.appendChild(avgEl3);

    let tableEl4 = document.getElementById('AllDepartmentsStatistics');
    let trEl4 = document.createElement('tr');
    tableEl4.appendChild(trEl4);

    let numberEl4 = document.createElement('td');
    numberEl4.textContent = `Number of employess in all departments = ${employeesCount}`;
    trEl4.appendChild(numberEl4);

    let salaryEl4 = document.createElement('td');
    salaryEl4.textContent = `Total salary = ${totalSalary}`;
    trEl4.appendChild(salaryEl4);

    let avgEl4 = document.createElement('td');
    avgEl4.textContent = `Average salary = ${totalSalary / employeesCount}}`;
    trEl4.appendChild(avgEl4);

}




