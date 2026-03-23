import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Auth } from '../auth';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.css']
})
export class SignUp {
  name = '';
  username = '';
  email = '';
  password = '';
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  register() {
    
    if (!this.name.trim() || !this.username.trim() || !this.email.trim() || !this.password.trim()) {
      this.error = 'All fields are required!';
      return;
    }

    const success = this.auth.register({
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    });

    if (success) {
      alert('Registration successful! Please log in.');
      this.router.navigate(['/signin']);
    } else {
      this.error = 'Username already exists!';
    }
  }
}