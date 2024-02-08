import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeArr: any[]=[];
  employee: any = {
    employeID : 0 ,
    fullname:'',
    mobile:'',
    email:''
  }
  ngOnInit(): void {
      const localdata=localStorage.getItem('employeelist');
      if(localdata!=null){
        this.employeeArr=JSON.parse(localdata);
      }
  }

saveEmployee(data:any){
  this.employee. employeID = this.employeeArr.length+ 1;
this.employeeArr.push(this.employee)
localStorage.setItem('employeelist',JSON.stringify(this.employeeArr))
this.employee = {
  employeID : 0 ,
  fullname:'',
  mobile:'',
  email:''
}
}

onupdate(emp:any){
  this.employee=emp;

}
onsave(){
 const record = this.employeeArr.find(m=>m.employeID==this.employee.employeID)
 record.fullname=this.employee.fullname;
 record.email=this.employee.email;
 record.mobile=this.employee.mobile;
 localStorage.setItem('employeelist',JSON.stringify(this.employeeArr))
 this.employee = {
  employeID : 0 ,
  fullname:'',
  mobile:'',
  email:''
}
}
ondelete(ID:number){
 for (let i = 0; i < this.employeeArr.length; i++) {
  if(this.employeeArr[i].employeID==ID){
    this.employeeArr.splice(i,1)

  }
  localStorage.setItem('employeelist',JSON.stringify(this.employeeArr))
 }

}

close(){
  this.employee = {
    employeID : 0 ,
    fullname:'',
    mobile:'',
    email:''
  }
}

}
