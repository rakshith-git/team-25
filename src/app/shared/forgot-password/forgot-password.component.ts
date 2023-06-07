import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  } 

  forgotPassword(forgotPasswordForm: NgForm){
      this.auth.forgotPassword(forgotPasswordForm.value.email);
      forgotPasswordForm.reset();
  }

}
