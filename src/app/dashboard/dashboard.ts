import { Component,OnInit  } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { Auth } from '../auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit{
  user: any;
  dailyQuestion: string = "Loading question...";
  isMenuOpen = false;

  constructor(private auth: Auth) {
    this.user = this.auth.getUser();
  }
    ngOnInit() {
    this.getQuestion();  // auto load on page start
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  getQuestion() {
     fetch('https://heartfelt-api-1.onrender.com/api/random')
      .then(res => res.json())
      .then(data => {
        this.typeWriterEffect(data.question);
      })
      .catch(err => {
        console.error(err);
        this.dailyQuestion = "Failed to load question.";
      });
  }

   typeWriterEffect(text: string) {
    this.dailyQuestion = "";
    let i = 0;

    const speed = 50; 

    const typing = setInterval(() => {
      if (i < text.length) {
        this.dailyQuestion += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, speed);
  }

  


  logout() {
    this.auth.logout();
  }
}