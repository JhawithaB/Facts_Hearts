import { Component } from '@angular/core';
import { Auth } from '../auth';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-about',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  user: any;
    
      constructor(private auth: Auth) {
        this.user = this.auth.getUser();
      }
    
      logout() {
        this.auth.logout();
      }
}
