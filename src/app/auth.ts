import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private users: User[] = [];
  private loggedInUser: User | null = null;

  constructor(private router: Router) {}

  register(user: User): boolean {
    this.users.push(user);
    return true;
  }

  login(username: string, password: string): boolean {

    const user = this.users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      this.loggedInUser = user;
      return true;
    }

    return false;
  }

  logout() {
    this.loggedInUser = null;
    this.router.navigate(['/']);
  }

  getUser() {
    return this.loggedInUser;
  }
}