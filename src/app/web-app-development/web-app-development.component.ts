import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-app-development',
  templateUrl: './web-app-development.component.html',
  styleUrl: './web-app-development.component.css'
})
export class WebAppDevelopmentComponent {

  
 
  constructor(private router: Router) {}

  navigateToKnowMore() {

    this.router.navigate(['/webappdevelopment/frontend']);
    this.router.navigate(['/webappdevelopment/backend']);
    this.router.navigate(['/webappdevelopment/full-stack']);
    this.router.navigate(['/webappdevelopment/app-dev']);

  }


}
