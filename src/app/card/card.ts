import { Component, Input, HostListener, signal, OnInit } from '@angular/core';
import { DatePipe} from "@angular/common";
@Component({
  selector: 'app-card',
  imports: [DatePipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title: string ='Projects Portfolio'

  example1: Project = {
    name: 'Megan Thee Stallion Music Album Browser',
    description: 'An application with card components, dynamic album detail pages, and route redirection. Deployed on Vercel.',
    skills: 'Technologies used: Angular, TypeScript, HTML, CSS',
    imageUrl: "images/MeganTheeStallion.png",
    linkUrl: "https://megantheestallionmusiclibrary.vercel.app/"
  };
  
  example2: Project = {
    name: 'MoneyMatters',
    description: 'A simple multi-page static financial literacy web application. Deployed it on GitHub Pages.',
    skills: 'Technologies used: HTML, CSS',
    imageUrl: "images/Moneymatters.png",
    linkUrl: "https://pnnjoroge.github.io/MoneyMatters/"
  };

  example3: Project = {
    name: 'AboutMe',
    description: 'Responsive single-page Angular and TypeScript portfolio site with project cards, deployed on Vercel.',
    skills: 'Technologies used: HTML, CSS, JS, TypeScript, Angular',
    imageUrl: "images/Aboutme.png",
    linkUrl: ""
  }

  isVisible = signal<boolean>(false);
  
  @HostListener('window:scroll', [])

  onWindowScroll(): void {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 20) {
      this.isVisible.set(true);
    } else {
      this.isVisible.set(false);
    }
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  currentDate: Date;
  ngOnInit(): void {

  }

  constructor() {
    this.currentDate = new Date();
  }

  updateCurrentDate(): void{
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

}
