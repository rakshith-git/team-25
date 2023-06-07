import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  signup(signUpForm: NgForm){
    if(signUpForm.value.password === signUpForm.value.ConfirmPassword){
      this.auth.signUp(signUpForm.value.email, signUpForm.value.password);
    }else{
      alert("Passwords do not match");
    }   
  }
}
