import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AccueilComponent {
  constructor(private elementRef: ElementRef) {}

  currentYear = new Date().getFullYear();
  isMenuOpen = false; // Variable pour gérer l'état du menu

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Inverser l'état du menu
  }

  scrollToSection(sectionId: string): void {
    // Accéder au Shadow DOM du composant
    const element = this.shadowRoot?.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Accéder à shadowRoot en tant que propriété du composant
  get shadowRoot() {
    return this.elementRef.nativeElement.shadowRoot;
  }
}
  
