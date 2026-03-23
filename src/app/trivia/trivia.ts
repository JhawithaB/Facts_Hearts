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
  
    constructor(private auth: Auth) {
      this.user = this.auth.getUser();
    }
  
    logout() {
      this.auth.logout();
    }
}
