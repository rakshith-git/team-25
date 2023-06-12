import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DepartmentService } from '../../department.service';

import { Validator } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
})
export class DepartmentsComponent implements OnInit {
  delMessage: string = '';
  res: any = [];
  departmentList: any = [];
  totalDepartments: any;
  departmentId: any;
  vetsList: any = [];
  vetsMap = new Map();
  vetsDeptId: any;
  vetnpiNo: any;
  validatingId: any;
  startingIndex: number = 0;
  endIndex: number = 3;
  totalRecords: string | undefined;
  page: number = 1;
  templateName: any;
  message: any;
  over() {
    console.log('Mouseover called');
  }

  previousData: any;

  loginForm = new FormGroup({
    departmentId: new FormControl(''),
    departmentName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^[A-Za-z]*$'),
    ]),
    departmentEmail: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    status: new FormControl('', Validators.required),
  });

  get departmentName() {
    return this.loginForm.get('departmentName');
  }
  get departmentEmail() {
    return this.loginForm.get('departmentEmail');
  }
  get description() {
    return this.loginForm.get('description');
  }
  get status() {
    return this.loginForm.get('status');
  }
  vetToUpdate = {
    departmentId: '',
    vetnpiNo: '',
  };

  departmentToUpadte = {
    departmentId: '',
    departmentName: '',
    departmentEmail: '',
    description: '',
    status: '',
  };

  data = {
    departmentId: '',
    departmentName: '',
    departmentEmail: '',
    description: '',
    status: '',
  };

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDepartments();
    this.getTotalNumberOfDepartments();
  }

  // method to get all added department details
  getAllDepartments(){
    this.departmentService.getAllDepartments()
    .subscribe({
      next: (resp:any) => {
        this.departmentList = resp;
      },
      error: (err: any) => {
      },
    });
  }

  // method to get total number of departments
  getTotalNumberOfDepartments(){
    this.departmentService.getTotalNumberOfDepartments()
    .subscribe({
      next: (resp:any) => {
        this.totalDepartments = resp;
      },
      error: (err: any) => {
      },
    });
  }

  // method to get all the Vets with respect to the department ID
  getVetsByDepartmentId(departmentId: number) {
    this.vetsList = [];
    this.departmentService.getListOfVets(departmentId).subscribe(
      (result) => {
        this.vetsList = result;
      },
      (error) => {
        console.log(error);
        alert('no vets');
      }
    );
  }

  // method to get the department details by passing the ID
  // and set the values in the form before user start editing it
  getDepartmentById() {
    this.departmentService
      .getDepartmentById(this.departmentId)
      .subscribe((data) => {
        this.previousData = data;
        console.log(this.previousData);
        this.loginForm.controls['departmentName'].setValue(
          this.previousData.departmentName
        );
        this.loginForm.controls['departmentEmail'].setValue(
          this.previousData.departmentEmail
        );
        this.loginForm.controls['status'].setValue(this.previousData.status);
        this.loginForm.controls['description'].setValue(
          this.previousData.description
        );

        this.departmentToUpadte = this.previousData;
        this.departmentToUpadte.departmentId = this.departmentId;
      });
  }

  edit(department: any) {
    this.departmentToUpadte = department;
  }

  // method to update the department by passing all the edited data of the form
  editDepartment() {
    console.log(this.loginForm.value);

    this.departmentToUpadte.departmentId = this.departmentId;
    this.departmentToUpadte.departmentEmail =
      this.loginForm.value.departmentEmail;
    this.departmentToUpadte.description = this.loginForm.value.description;
    this.departmentToUpadte.status = this.loginForm.value.status;
    this.departmentToUpadte.departmentName =
      this.loginForm.value.departmentName;
    console.log(this.departmentToUpadte);
    this.departmentService
      .editDepartmentById(this.departmentToUpadte)
      .subscribe(
        (resp) => {
          console.log(resp);

          alert('Record added successfully');
          console.log(resp);
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert('please enter a value');
        }
      );
    this.router.navigate(['/departments']);
  }

  setDepartmentId(id: number) {
    this.departmentId = id;
    this.getDepartmentById();
    console.log(this.previousData);
  }

  // method to pass the id to delete the selected department
  deletedDepartment() {
    this.message = this.departmentService
      .deleteDepartmentById(this.departmentId)
      .subscribe((delMessage) => (this.message = delMessage));
    console.log(this.message);
    window.location.reload();
    this.router.navigate(['/departments']);
  }

  addDepartmentToVet() {
    let flag = 0;
    for (let i = 0; i < this.departmentList.length; i++) {
      if (
        this.departmentList[i].departmentId == this.vetToUpdate.departmentId
      ) {
        flag = 1;
        this.departmentService
          .addDepartmentToVet(
            this.vetToUpdate.vetnpiNo,
            this.vetToUpdate.departmentId
          )
          .subscribe(
            (resp) => {
              console.log(resp);

              alert('Record added successfully');
              console.log(resp);
            },
            (error) => {
              console.log(error);
              alert('Invalid Vet Id');
              this.router.navigate(['/departments']);
            }
          );
      }
    }
    if (flag == 0) alert('Invalid Department Id');
    this.router.navigate(['/departments']);
  }
}
