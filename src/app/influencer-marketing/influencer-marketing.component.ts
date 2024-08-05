import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-influencer-marketing',
  templateUrl: './influencer-marketing.component.html',
  styleUrl: './influencer-marketing.component.css'
})
export class InfluencerMarketingComponent {
  constructor(private router: Router) {}

  navigateToKnowMore() {
    this.router.navigate(['/influencermarketing/campaign-strategy']);
    this.router.navigate(['/influencermarketing/influencer-outreach']);
    this.router.navigate(['/influencermarketing/brand-partnership']);
    this.router.navigate(['/influencermarketing/content-creation']);
  }

}
