'use strict';

let myForm = document.getElementById('employeesForm');
let infoSection = document.getElementById('cardSection');
let adminSection = document.getElementById('Administration');
let marketingSection = document.getElementById('Marketing');
let devSection = document.getElementById('Development');
let FainanceSection = document.getElementById('Fainance');


let employeeArray = [];
let emplID = 1000;
getData();
console.log(employeeArray);
function EmployeeInfo(fullName, department, level, imgURL) {
    this.employeeID =0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgURL = imgURL;

    this.CalSalary(level);
    this.EmployeeID();
    employeeArray.push(this);

}

/****************************************************************************************************************************/
myForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    //console.log(event);


    let FullName = event.target.FullName.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    let Image = event.target.Image.value;

    let newEmployee = new EmployeeInfo(FullName, Department, Level, Image);
    
  
    //console.log(employeeArray);
    saveData(employeeArray);
    Render(newEmployee);
   // console.log(employeeArray);
}

/**********************************************************************************************************************/
function saveData(data) {
    let stringifyData = JSON.stringify(data);
    localStorage.setItem("allEmployee", stringifyData);
    
}
function getData() {
    let retrievedData = localStorage.getItem("allEmployee");
    // console.log(retrievedData);
    const arrayData =JSON.parse(retrievedData);
    // console.log(arrayData);
    // console.log(arrayData.length);

    if (arrayData != null) {

        for (let i = 0; i < arrayData.length; i++) {
            let newEmployee = new EmployeeInfo(arrayData[i].fullName, arrayData[i].department,arrayData[i].level, arrayData[i].imgURL);
            
        }
    }

}
/************************************************************************************************************************ */ 

EmployeeInfo.prototype.EmployeeID = function () {
    this.employeeID = emplID++;
}

function Render (employee){
  const divEl =document.createElement('div');
   const imgEl = document.createElement('img');
   imgEl.src = employee.imgURL;
   divEl.appendChild(imgEl);

   const NameEl = document.createElement('p');
   NameEl.textContent = `Name: ${employee.fullName}`; 
   divEl.appendChild(NameEl);

   const IDEl = document.createElement('p');
   IDEl.textContent = `ID: ${employee.employeeID}` ;
   divEl.appendChild(IDEl);

   const departmentEl = document.createElement('p');
   if (employee.department == '1'|| employee.department == "Administration" ) {
      departmentEl.textContent = `Department: Administration`;
      divEl.appendChild(departmentEl);}

   else if (employee.department == '2'|| employee.department == "Marketing" ) {
      departmentEl.textContent = `Department: Marketing`;
      divEl.appendChild(departmentEl);}

   else if (employee.department == '3'|| employee.department == "Development") {
      departmentEl.textContent = `Department: Development`;
      divEl.appendChild(departmentEl);}

   else if (employee.department == '4'||employee.department == "Fainance") {
      departmentEl.textContent = `Department: Fainance`;
      divEl.appendChild(departmentEl);}


   const levelEl = document.createElement('p');
   if(employee.level == '1' ||employee.level == "Junior")
   {levelEl.textContent = `Level: Junior`;
   divEl.appendChild(levelEl);}

   else if(employee.level == '2'|| employee.level == "Mid-Senior")
   {levelEl.textContent = `Level: Mid-Senior`;
   divEl.appendChild(levelEl);}

   else if(employee.level == '3'|| employee.level == "Senior")
   {levelEl.textContent = `Level: Senior`;
   divEl.appendChild(levelEl);}

   const salaryEl = document.createElement('p');
   salaryEl.textContent = `Salary: ${employee.salary}`;
   divEl.appendChild(salaryEl);

   if (employee.department == '1'|| employee.department == "Administration" ) {
    adminSection.appendChild(divEl);
    }

 else if (employee.department == '2'|| employee.department == "Marketing" ) {
    marketingSection.appendChild(divEl);}

 else if (employee.department == '3'|| employee.department == "Development") {
   devSection.appendChild(divEl);}

 else if (employee.department == '4'|| employee.department == "Fainance") {
    FainanceSection.appendChild(divEl);}

}



    function calSalary  (level) {
    let tax = 0.075;
    let min = 0;
    let max = 0;
    let salary = 0;
    let randomSalary = 0;
    if (level == 1 || level == "Junior") {
        min = 500;
        max = 1000;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary - randomSalary * tax;

    }

    else if (level == 2 || level == "Mid-Senior") {
        min = 1000;
        max = 1500;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary - randomSalary * tax;
    }
    else if (level == 3 || level == "Senior") {
        min = 1500;
        max = 2000;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary - randomSalary * tax;

    }

}
/*************************************************************************************************************************************/

let ghaziSamer = new EmployeeInfo('Ghazi Samer', 'Administration', 'Senior', './assets/pic1.png');
let lanaAli = new EmployeeInfo('Lana Ali', 'Fainance', 'Senior', './assets/pic1.png');
let tamaraAyoub = new EmployeeInfo('Tamara Ayoub', 'Marketing', 'Senior', './assets/pic1.png');
let saifWaleed = new EmployeeInfo('Safi Walid', 'Administration', 'Mid-Senior', './assets/pic1.png');
let omarZaid = new EmployeeInfo('Omar Zaid', 'Development', 'Senior', './assets/pic1.png');
let ranaSaleh = new EmployeeInfo('Rana Saleh', 'Development', 'Junior', './assets/pic1.png');
let hadiAhmad = new EmployeeInfo('Hadi Ahmad', 'Fainance', 'Mid-Senior', './assets/pic1.png');
// saveData(employeeArray);


for (let i = 0; i < employeeArray.length; i++) {
    employeeArray[i].EmployeeID();
    //console.log(employeeArray[i].level);
    //employeeArray[i].Salary(employeeArray[i].level);
    Render(employeeArray[i]);
}


//console.log(employeeArray)
//console.log(employeeArray);