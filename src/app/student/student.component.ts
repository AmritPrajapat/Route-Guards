
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
//@ViewChild('studentForm',{static:false})   public createStudentForms: NgForm; 
@ViewChild('studentForm',{static:true}) public createEmployeeForm: NgForm;


  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
  }


  studentForm=this._fb.group({
    name : [''],
    email:[''],
    address:[''],
    mobile:['']  
  })

  Onsave(studentForm)
  {

  }


 

}
