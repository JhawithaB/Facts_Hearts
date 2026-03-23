import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-heartfelts',
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './heartfelts.html',
  styleUrl: './heartfelts.css',
})
export class Heartfelts implements OnInit {
   user: any;
    
   
  questions: any[] = [];
  current: number = 0;
  isLoading: boolean = true;
  
  
  showWelcome: boolean = true; 
  quizFinished: boolean = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef,private auth: Auth ) {this.user = this.auth.getUser();
      }
    
      logout() {
        this.auth.logout();}

  ngOnInit() {
    this.fetchHeartfelt();
  }

  fetchHeartfelt() {
    this.isLoading = true;
    this.http.get<any[]>('https://heartfelt-api-1.onrender.com/api/heartfelts')
      .subscribe({
        next: (data) => {
          this.questions = data.sort(() => Math.random() - 0.5); 
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: () => { this.isLoading = false; }
      });
  }

  
  startExploring() {
    this.showWelcome = false;
    this.cdr.detectChanges();
  }

  nextQuestion() {
    if (this.current + 1 < this.questions.length) {
      this.current++;
    } else {
      this.quizFinished = true;
    }
    this.cdr.detectChanges();
  }
  quitQuestions() {
  this.showWelcome = true;
  this.quizFinished = false;
  this.current = 0;
  this.questions = [];
  this.isLoading = false;
  }
}
