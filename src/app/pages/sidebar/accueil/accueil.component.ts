import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit  {

  scripts = ['./assets/js/js/bootsnav.js', './assets/js/js/bootstrap.min.js', './assets/js/js/jquery.js'];

  constructor() {}

  ngOnInit(): void {
    this.loadScripts();
  }

  loadScripts() {
    this.scripts.forEach(script => {
      const scriptElement = document.createElement('script');
      scriptElement.src = script;
      scriptElement.async = true;
      document.body.appendChild(scriptElement);
    });
  }

}
