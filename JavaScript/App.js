'use strict';

let myForm = document.getElementById('employeesForm');
let infoSection = document.getElementById('cardSection');
let adminSection = document.getElementById('Administration');
let marketingSection = document.getElementById('Marketing');
let devSection = document.getElementById('Development');
let FainanceSection = document.getElementById('Fainance');


let employeeArray = [];
let emplID = 1000;

function EmployeeInfo(fullName, department, level, imgURL) {
    this.employeeID = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgURL = imgURL;
    this.salary = 0;
    employeeArray.push(this);

}

console.log(EmployeeInfo);
/****************************************************************************************************************************/
myForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    console.log(event);


    let FullName = event.target.FullName.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    let Image = event.target.Image.value;

    let newEmployee = new EmployeeInfo(FullName, Department, Level, Image);
    console.log(Level);
    newEmployee.EmployeeID();
    newEmployee.Salary(Level);
    newEmployee.Render();
}

/**********************************************************************************************************************/

EmployeeInfo.prototype.EmployeeID = function () {
    this.employeeID = emplID++;
}

EmployeeInfo.prototype.Render =function()
{  const divEl =document.createElement('div');;
   const imgEl = document.createElement('img');
   imgEl.src = this.imgURL;
   divEl.appendChild(imgEl);
   console.log(imgEl);

   const NameEl = document.createElement('p');
   NameEl.textContent = `Name: ${this.fullName}`; 
   divEl.appendChild(NameEl);

   const IDEl = document.createElement('p');
   IDEl.textContent = `ID: ${this.employeeID}` ;
   divEl.appendChild(IDEl);

   const departmentEl = document.createElement('p');
   if (this.department == '1'|| this.department == "Administration" ) {
      departmentEl.textContent = `Department: Administration`;
      divEl.appendChild(departmentEl);}

   else if (this.department == '2'|| this.department == "Marketing" ) {
      departmentEl.textContent = `Department: Marketing`;
      divEl.appendChild(departmentEl);}

   else if (this.department == '3'|| this.department == "Development") {
      departmentEl.textContent = `Department: Development`;
      divEl.appendChild(departmentEl);}

   else if (this.department == '4'|| this.department == "Fainance") {
      departmentEl.textContent = `Department: Fainance`;
      divEl.appendChild(departmentEl);}


   const levelEl = document.createElement('p');
   if(this.level == '1' || this.level == "Junior")
   {levelEl.textContent = `Level: Junior`;
   divEl.appendChild(levelEl);}

   else if(this.level == '2'|| this.level == "Mid-Senior")
   {levelEl.textContent = `Level: Mid-Senior`;
   divEl.appendChild(levelEl);}

   else if(this.level == '3'|| this.level == "Senior")
   {levelEl.textContent = `Level: Senior`;
   divEl.appendChild(levelEl);}

   const salaryEl = document.createElement('p');
   salaryEl.textContent = `Salary: ${this.salary}`;
   divEl.appendChild(salaryEl);

   if (this.department == '1'|| this.department == "Administration" ) {
    adminSection.appendChild(divEl);
    }

 else if (this.department == '2'|| this.department == "Marketing" ) {
    marketingSection.appendChild(divEl);}

 else if (this.department == '3'|| this.department == "Development") {
   devSection.appendChild(divEl);}

 else if (this.department == '4'|| this.department == "Fainance") {
    FainanceSection.appendChild(divEl);}

}



EmployeeInfo.prototype.Salary = function (level) {
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

    console.log(this.salary);
}
/*************************************************************************************************************************************/

let ghaziSamer = new EmployeeInfo('Ghazi Samer', 'Administration', 'Senior', './assets/pic1.png');
let lanaAli = new EmployeeInfo('Lana Ali', 'Fainance', 'Senior', './assets/pic1.png');
let tamaraAyoub = new EmployeeInfo('Tamara Ayoub', 'Marketing', 'Senior', './assets/pic1.png');
let saifWaleed = new EmployeeInfo('Safi Walid', 'Administration', 'Mid-Senior', './assets/pic1.png');
let omarZaid = new EmployeeInfo('Omar Zaid', 'Development', 'Senior', './assets/pic1.png');
let ranaSaleh = new EmployeeInfo('Rana Saleh', 'Development', 'Junior', './assets/pic1.png');
let hadiAhmad = new EmployeeInfo('Hadi Ahmad', 'Fainance', 'Mid-Senior', './assets/pic1.png');

console.log(employeeArray);
for (let i = 0; i < employeeArray.length; i++) {
    employeeArray[i].EmployeeID();
    console.log(employeeArray[i].level);
    employeeArray[i].Salary(employeeArray[i].level);
    employeeArray[i].Render();
}
