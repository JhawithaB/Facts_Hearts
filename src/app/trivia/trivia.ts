import { Component } from '@angular/core';
import { Auth } from '../auth';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-trivia',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './trivia.html',
  styleUrl: './trivia.css',
})
export class Trivia {
   user: any;
    isMenuOpen = false;
  
    constructor(private auth: Auth) {
      this.user = this.auth.getUser();
    }

     toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
    logout() {
      this.auth.logout();
    }
}
