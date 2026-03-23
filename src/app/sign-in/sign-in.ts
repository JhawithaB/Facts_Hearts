import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Auth } from '../auth';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css']
})
export class SignIn {
  username = '';
  password = '';
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  login() {
   
    if (!this.username.trim() || !this.password.trim()) {
      this.error = 'Username and password are required!';
      return;
    }

    const success = this.auth.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid credentials!';
    }
  }
}