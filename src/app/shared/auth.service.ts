import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then((res) => {
      localStorage.setItem('token', 'true');
      if (res.user?.emailVerified == true) {
        this.router.navigate(['/dashboard']);
      } else {
        this.sendEmailForVerification(res.user)
        this.router.navigate(['/verify-email']);
      }
    }, err => {
      alert('Invalid email or password');
      this.router.navigate(['/login']);
    });
  }

  signUp(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then((data) => {
      alert('Registration successful');
      this.sendEmailForVerification(data.user)
      this.router.navigate(['/verify-email'])

    }, err => {
      console.log(err);
      alert('Something went wrong');
      this.router.navigate(['/signup']);
    });
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    });
  }

  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify-email']);
    }, err => {
      alert('Something went wrong');
    });
  }

  sendEmailForVerification(user: any) {
    console.log(user)
    user.sendEmailVerification().then((res: any) => {
      this.router.navigate(['/verif-email']);
    }, (err: any) => {
      alert('Something went wrong. Not able to send mail for verification');
    })
  }

  
}

