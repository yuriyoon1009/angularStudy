import { Component } from '@angular/core'

//nested component
@Component({
    selector:'my-employee',
    templateUrl:'./employee.component.html',
    styleUrls:['./employee.component.css']
    /*
    styles:[
        `h1{
            color:#469;
        }
        
        table{
            color:#369;
            border-collapse:collapse;
        }
        
        td{
            border:1px solid #ccc;
        }`
    ]*/

})

export class EmployeeComponent{
    firstName: string = 'Tom';
    lastName: string = 'hodkf';
    gender: string = 'Male';
    age: number = 20;   
}