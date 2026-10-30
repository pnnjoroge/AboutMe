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
    name: 'MoneyMatters',
    description: 'A multi-page financial literacy web application.',
    skills: 'Technologies used: HTML, CSS, JS',
    imageUrl: "images/Moneymatters.png",
    linkUrl: "https://pnnjoroge.github.io/MoneyMatters/"
  };

  example2: Project = {
    name: 'Favorite Cakes',
    description: 'A single-page passion project web application about cakes.',
    skills: 'Technologies used: HTML, CSS',
    imageUrl: "images/Favoritecakes.png",
    linkUrl: "https://pnnjoroge.github.io/Favorite-Cakes--One-page-Website-Portfolio/"
  };

  example3: Project = {
    name: 'AboutMe',
    description: 'A single-page introduction and portfolio-showcasing web application.',
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
