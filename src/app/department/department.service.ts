import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


  departmentURL=environment.DepartmentUrl
  vetURL=environment.VetUrl
  constructor(private http: HttpClient){}

  public addDepartment(DepartmentData:any){
    return this.http.post(this.departmentURL+'/petzeydepartment/department/create',DepartmentData);
  }

  // method to get the department details by passing the department id as an argument
  public getDepartmentById(id:number){
    return this.http.get(this.departmentURL+'/petzeydepartment/department/departmentbyid/'+id);
  }

  // method to edit the department by passing the updated data to the PUT api
  public  editDepartmentById(DepartmentData:any){
    return this.http.put(this.departmentURL+'/petzeydepartment/department/edit',DepartmentData);
  }

  // method to get total number of departments through the backend department service
  public getAllDepartments(){
    return this.http.get(this.departmentURL+'/petzeydepartment/department/alldepartments');
  }

  // method to get total number of departments through the backend department service
  public getTotalNumberOfDepartments(){
    return this.http.get(this.departmentURL+'/petzeydepartment/department/totaldepartments');
  }

  public getDepartmentEmailById(id:number){
    return this.http.get(this.departmentURL+'/petzeydepartment/department/departmentmailbyid/'+id);
  }

  // method to delete the department by passing the department ID
  public deleteDepartmentById(id:number){
    return this.http.delete(this.departmentURL+'/petzeydepartment/department/delete/'+id);
  }

  public getStatusById(id:number){
    return this.http.get(this.departmentURL+'/petzeydepartment/department/departmentstatus/'+id);
  }

  // method to add the department to the Vet by passing both vet and department ID
  public addDepartmentToVet(vetId:any,departmentId:any){
    let text=vetId.concat("/",departmentId);
    return this.http.put(this.vetURL+'/vet/vet/add/departmentid/'+text+"/",departmentId);
  }

  // method to get list of vet details according to the department ID
  public getListOfVets(departmentId:number){
    return this.http.get(this.vetURL+'/vet/veiw/vet/departmentId/'+departmentId);
  }

}
