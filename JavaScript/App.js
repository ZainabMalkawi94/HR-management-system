'use strict';

let myForm = document.getElementById('employeesForm');
let infoSection = document.getElementById('cardSection');



let employeeArray = [];
let emplID = 1000;

function EmployeeInfo( fullName, department, level, imgURL) {
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
myForm.addEventListener('submit',handleSubmit);
function handleSubmit(event)
{
    event.preventDefault();
    console.log(event);
   

 let FullName= event.target.FullName.value;
 let Department= event.target.Department.value;
 let Level= event.target.Level.value;
 let Image= event.target.Image.value;

let newEmployee=new EmployeeInfo(FullName,Department,Level,Image);
console.log(Level);
newEmployee.EmployeeID();
newEmployee.Salary(Level);
newEmployee.Render();
}

/**********************************************************************************************************************/

EmployeeInfo.prototype.EmployeeID=function()
{
 this.employeeID = emplID++;
}

EmployeeInfo.prototype.Render =function()
{
   const imgEl = document.createElement('img');
   imgEl.src = this.imgURL;
   infoSection.appendChild(imgEl);
   console.log(imgEl);

   const NameEl = document.createElement('p');
   NameEl.textContent = `Name: ${this.fullName}`; 
   infoSection.appendChild(NameEl);

   const IDEl = document.createElement('p');
   IDEl.textContent = `ID: ${this.employeeID}` ;
   infoSection.appendChild(IDEl);

   const departmentEl = document.createElement('p');
   if (this.department == '1') {
      departmentEl.textContent = `Department: Administration`;
      infoSection.appendChild(departmentEl);}

   else if (this.department == '2') {
      departmentEl.textContent = `Department: Marketing`;
      infoSection.appendChild(departmentEl);}

   else if (this.department == '3') {
      departmentEl.textContent = `Department: Development`;
      infoSection.appendChild(departmentEl);}

   else if (this.department == '4') {
      departmentEl.textContent = `Department: Finance`;
      infoSection.appendChild(departmentEl);}


   const levelEl = document.createElement('p');
   if(this.level == '1')
   {levelEl.textContent = `Level: Junior`;
   infoSection.appendChild(levelEl);}

   else if(this.level == '2')
   {levelEl.textContent = `Level: Mid-Senior`;
   infoSection.appendChild(levelEl);}

   else if(this.level == '3')
   {levelEl.textContent = `Level: Senior`;
   infoSection.appendChild(levelEl);}

   const salaryEl = document.createElement('p');
   salaryEl.textContent = `Salary: ${this.salary}`;
   infoSection.appendChild(salaryEl);
}


EmployeeInfo.prototype.Salary = function (level) {
    let tax = 0.075;
    let min = 0;
    let max = 0;
    let salary = 0;
    let randomSalary = 0;
    if (level == 1) {
        min = 500;
        max = 1000;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary-randomSalary * tax;

    }

    else if (level == 2) {
        min = 1000;
        max = 1500;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary-randomSalary * tax;
    }
    else if (level == 3) {
        min = 1500;
        max = 2000;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary-randomSalary * tax;

    }

    console.log(this.salary);
}
/*************************************************************************************************************************************/
for(let i = 0 ; i < employeeArray.length ; i++){
    employeeArray[i].salary(employeeArray[i].level);
    employeeArray[i].render()
}
console.log(employeeArray);