import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule, NgClass  } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../auth';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trivia-science',
  imports: [CommonModule, FormsModule, NgClass,RouterLink, RouterLinkActive],
  templateUrl: './trivia-science.html',
  styleUrl: './trivia-science.css',
})
export class TriviaScience implements OnInit {
  user: any;
    
     
  questions: any[] = [];
  current: number = 0;
  score: number = 0;
  shuffledAnswers: string[] = [];
  selectedAnswer: string | null = null;

  isLoading: boolean = true;
  answered: boolean = false;
  quizFinished: boolean = false;
  errorMessage: string = '';

  constructor(private auth: Auth,
    private router: Router,
    private cdr: ChangeDetectorRef 
  ) { this.user = this.auth.getUser();
      }
    
      logout() {
        this.auth.logout();}

  ngOnInit() {
    this.loadTrivia();
  }

  async loadTrivia() {
    this.isLoading = true;
    const cachedData = localStorage.getItem('science_trivia');
    if (cachedData) {
      this.questions = JSON.parse(cachedData);
      this.isLoading = false;
      this.startGame();
    } else {
      this.fetchQuestions();
    }
  }

  async fetchQuestions() {
    this.isLoading = true;
    const url = "https://the-trivia-api.com/v2/questions?limit=10&categories=science";
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.length > 0) {
        this.questions = data;
        localStorage.setItem('science_trivia', JSON.stringify(data));
        this.isLoading = false;
        this.startGame();
      }
    } catch (error) {
      this.errorMessage = "Connection error. Retry again.";
      this.isLoading = false;

    }
    this.cdr.detectChanges(); 
  }

  startGame() {
    this.current = 0;
    this.score = 0;
    this.quizFinished = false;
    this.prepareAnswers();
  }

  prepareAnswers() {
    const q = this.questions[this.current];
    if (q) {
      const answers = [...q.incorrectAnswers, q.correctAnswer];
      this.shuffledAnswers = answers.sort(() => Math.random() - 0.5);
      this.answered = false; 
      this.selectedAnswer = null;
      console.log("Loading Question:", this.current + 1);
    }
    this.cdr.detectChanges(); 
  }

  checkAnswer(answer: string) {
    if (this.answered) return;

    this.answered = true;
    this.selectedAnswer = answer;

    if (answer === this.questions[this.current].correctAnswer) {
      this.score++;
    }


    setTimeout(() => {
      this.nextQuestion();
    }, 2000);

    this.cdr.detectChanges(); 
  }

  nextQuestion() {
    console.log("Moving to next...");
    if (this.current + 1 < this.questions.length) {
      this.current++;
      this.prepareAnswers();
    } else {
      this.quizFinished = true;

      this.saveToHistory();
    }
    this.cdr.detectChanges(); 
  }
  saveToHistory() {
    const categoryName = this.router.url.split('/').pop()?.toUpperCase() || 'TRIVIA';
    const newEntry = {
      category: 'SCIENCE',
      score: this.score,
      total: this.questions.length,
      date: new Date().toISOString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const existingHistory = JSON.parse(localStorage.getItem('science_history') || '[]');
    existingHistory.unshift(newEntry);
    localStorage.setItem('science_history', JSON.stringify(existingHistory.slice(0, 10)));
  }

  restart() {
    localStorage.removeItem('science_history');
    this.fetchQuestions();
  }

  decode(text: string): string {
    if (!text) return '';
    const parser = new DOMParser();
    return parser.parseFromString(text, 'text/html').body.textContent || '';
  }
}

