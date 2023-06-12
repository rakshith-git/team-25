import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(loginForm : NgForm){
    this.auth.login(loginForm.value.email, loginForm.value.password );
    loginForm.reset();
  }

  
}
