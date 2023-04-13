'use strict'
//another GetFunc.

function getData() {
    let retrievedData = localStorage.getItem("allEmployee");
    const arrayData =JSON.parse(retrievedData);
    console.log(arrayData );
}
getData();
// let tableEl = document.getElementById('salaryTable');

// let countAdmEmps = 0 ; 
// let saAdmEmps = 0 ;

// let countMarkEmps = 0 ; 
// let saMarkEmps = 0 ;

// let countDevEmps = 0 ; 
// let saDevEmps = 0 ;

// let countFinEmps = 0 ; 
// let saFinEmps = 0 ;

// for (let i = 0 ; i < employeeArray2.length ; i++){
//     if (employeeArray2[i].department == '1'|| employeeArray2[i].department == "Administration" ) {
//         countAdmEmps++; 
//          saAdmEmps += employeeArray2[i].salary ;
//     }
  
//      else if (employeeArray2[i].department == '2'|| employeeArray2[i].department == "Marketing" ) {
//         countMarkEmps++ ; 
//         saMarkEmps += employeeArray2[i].salary ;    
//     }
  
//      else if (employeeArray2[i].department == '3'|| employeeArray2[i].department == "Development") {
//         countDevEmps++; 
//         saDevEmps += employeeArray2[i].salary ;
//     }
  
//      else if (employeeArray2[i].department == '4'|| employeeArray2[i].department == "Fainance") {
//        countFinEmps++ ; 
//         saFinEmps += employeeArray2[i].salary ;
//     }

// }

// console.log (`Admin ${countAdmEmps} totalSal ${saAdmEmps} // Admin ${countMarkEmps} totalSal ${saMarkEmps} // `)




// Drink.prototype.renderTable = function () {
//     let trEl = document.createElement('tr');
//     tableEl.appendChild(trEl);
//     let drinkNameEl = document.createElement('td');
//     drinkNameEl.textContent = this.dName;
//     trEl.appendChild(drinkNameEl);
//     let drinkPriceEl = document.createElement('td');
//     drinkPriceEl.textContent = this.price;
//     trEl.appendChild(drinkPriceEl);
// }
