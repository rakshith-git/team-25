import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DepartmentService } from '../../department.service';
import { Validator } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})

export class AddDepartmentsComponent implements OnInit {

  departmentData: any
  loginForm = new FormGroup({
    departmentName: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('^[A-Za-z]*$')]),
    departmentEmail: new FormControl('', [Validators.required, Validators.email]),
    description: new FormControl('', [Validators.required,Validators.minLength(10)]),
    status: new FormControl('', Validators.required)
    
  })

  get departmentName() {
    return this.loginForm.get('departmentName');
  }
  get departmentEmail(){
    return this.loginForm.get('departmentEmail');
  }
  get description(){
    return this.loginForm.get('description');
  }
  get status(){
    return this.loginForm.get('status');
  }


  constructor(private departmentService: DepartmentService,private router:Router) { }



  ngOnInit(): void {

  }


  addDepartment() {
    this.departmentData=this.loginForm;
    if (this.departmentData.value.status == 'Active') { 
      this.departmentData.value.status = true 
    } else { 
      this.departmentData.value.status = false 
    } 
    this.departmentService.addDepartment(this.departmentData.value).subscribe((resp) => { 
      alert("Record added successfully"); 
      console.log(resp); 
      this.departmentData.reset(); 
      this.router.navigateByUrl('departments');

    }, (error) => {
        alert(error)
       console.log(error);
      }
      )}
    }
