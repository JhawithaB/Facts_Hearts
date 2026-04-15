import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { SignUp } from './sign-up/sign-up';
import { SignIn } from './sign-in/sign-in';
import { Dashboard } from './dashboard/dashboard';
import { Trivia } from './trivia/trivia';
import { Heartfelts } from './heartfelts/heartfelts';
import { About } from './about/about';
import { TriviaScience } from './trivia-science/trivia-science';
import { TriviHistory } from './trivia-history/trivi-history';
import { TriviaGeneralknowledge } from './trivia-generalknowledge/trivia-generalknowledge';
import { Contact } from './contact/contact';
import { Learnmore } from './learnmore/learnmore';
import { ScoreHistory } from './score-history/score-history';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'signup', component: SignUp },
  { path: 'signin', component: SignIn },
  { path: 'dashboard', component: Dashboard },
  { path:'trivia', component: Trivia },
  { path:'heartfelts', component: Heartfelts },
  { path:'about', component: About },
  { path:'trivia-science', component: TriviaScience },
  { path:'trivia-history', component: TriviHistory },
  { path:'trivia-generalknowledge', component: TriviaGeneralknowledge },
  { path:'contact', component: Contact},
  {path: 'learnmore', component: Learnmore},
  {path: 'score-history', component: ScoreHistory},
  { path: '**', redirectTo: '' }
];