'use strict'

let myForm = document.getElementById("newEmployeesForm");




function Employee(emloyeeID, fullName, department, level, imgURL) {
    this.emloyeeID = emloyeeID
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgURL = imgURL;
}

let employeeArray = [];

Employee.prototype.salary = function (level) {
    let tax = 0.075;
    let min = 0;
    let max = 0;
    let salary = 0;
    if (level == "Junior") {
        min = 500;
        max = 1000;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary-randomSalary * tax;

    }

    else if (level == "Mid-Senior") {
        min = 1000;
        max = 1500;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary-randomSalary * tax;
    }
    else if (level == "Senior") {
        min = 1500;
        max = 2000;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary-randomSalary * tax;

    }
}

Employee.prototype.render = function (){
    document.write (`ID:${this.emloyeeID} <br> Name: ${this.fullName} <br> Salary: ${this.salary} <br><br>`)
}



let ghaziSamer = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior');
employeeArray.push(ghaziSamer);
let lanaAli = new Employee(1001, 'Lana Ali', 'Fainance', 'Senior');
employeeArray.push(lanaAli);
let tamaraAyoub = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
employeeArray.push(tamaraAyoub);
let saifWaleed = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
employeeArray.push(saifWaleed);
let omarZaid = new Employee(1004, 'Omar Zaid', 'Develoment', 'Senior');
employeeArray.push(omarZaid);
let ranaSaleh = new Employee(1005, 'Rana Saleh', 'Develoment', 'Junior');
employeeArray.push(ranaSaleh);
let hadiAhmad = new Employee(1006, 'Hadi Ahmad', 'Fainance', 'Mid-Senior');
employeeArray.push(hadiAhmad);


for(let i = 0 ; i < employeeArray.length ; i++){
    employeeArray[i].salary(employeeArray[i].level);
}

for(let i = 0 ; i < employeeArray.length ; i++){
    employeeArray[i].render()
}