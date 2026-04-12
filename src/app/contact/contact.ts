import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../auth';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
   user: any;
    isMenuOpen=false;
   constructor(private auth: Auth) {
    this.user = this.auth.getUser();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  sendMessage() {
    alert('Thank you! Your message has been sent successfully.');
  }
  

  logout() {
    this.auth.logout();
  }
}
