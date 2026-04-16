import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Auth } from '../auth';

interface TriviaRecord {
  category: string;
  score: number;
  total: number;
  date: string;
}

@Component({
  selector: 'app-score-history',
  imports: [CommonModule, RouterLink],
  templateUrl: './score-history.html',
  styleUrl: './score-history.css',
})
export class ScoreHistory implements OnInit {
 consolidatedHistory: TriviaRecord[] = [];
  scienceAvg: number = 0;
  historyAvg: number = 0;
  generalAvg: number = 0;

  isMenuOpen=false;
  user:any;
  
  constructor(private auth: Auth) {
    this.user = this.auth.getUser();
  }
  logout() {
    this.auth.logout();
  }

  ngOnInit() {
    this.loadUnifiedHistory();
  }

  loadUnifiedHistory() {
    // Collect data using the keys from your trivia components
    const scData = JSON.parse(localStorage.getItem('science_history') || '[]');
    const hiData = JSON.parse(localStorage.getItem('trivia_history') || '[]');
    const genData = JSON.parse(localStorage.getItem('generalknowledge_trivia') || '[]');

    
    this.consolidatedHistory = [...scData, ...hiData, ...genData].sort((a, b) => {
   
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
    
    // Calculate Averages (Fixed NaN logic)
    this.scienceAvg = this.calculateAvg(scData);
    this.historyAvg = this.calculateAvg(hiData);
    this.generalAvg = this.calculateAvg(genData);
  }

  private calculateAvg(data: any[]): number {
    if (!data || data.length === 0) return 0;
    const totalPoints = data.reduce((sum, item) => sum + item.score, 0);
   const avg = totalPoints / data.length;
   return Math.round(avg * 10) / 10;
  }

  getScoreClass(score: number): string {
    if (score >= 8) return 'excellent';
    if (score >= 5) return 'good';
    return 'poor';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
}
