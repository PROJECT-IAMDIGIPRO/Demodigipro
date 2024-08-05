import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrl: './digital-marketing.component.css'
})
export class DigitalMarketingComponent {

  constructor(private router: Router) {}

  navigateToKnowMore() {
    this.router.navigate(['/digitalmarketing/seo']);
    this.router.navigate(['/digitalmarketing/ppc']);
    this.router.navigate(['/digitalmarketing/smm']);
    this.router.navigate(['/digitalmarketing/contentmarketing']);
    this.router.navigate(['/digitalmarketing/emailmarketing']);  
  }

}
