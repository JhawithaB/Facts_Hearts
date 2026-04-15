
import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-learnmore',
  imports: [ RouterLink],
  templateUrl: './learnmore.html',
  styleUrl: './learnmore.css',
})
export class Learnmore implements AfterViewInit {

  ngAfterViewInit() {
    const observerOptions = {
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: stop observing once it has faded in
          // observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    // Grab all elements with the 'reveal' class
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(target => observer.observe(target));
  }

  // Your existing scrollTo function
  scrollTo(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}