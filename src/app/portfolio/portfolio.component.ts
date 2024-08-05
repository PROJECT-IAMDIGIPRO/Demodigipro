import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  constructor(private router: Router) {}

  navigateToKnowMore() {
    this.router.navigate(['/portfolio/socialmediapost']);
    this.router.navigate(['/portfolio/packagedesigning']);
    this.router.navigate(['/portfolio/schoolyoutubechannelmanagement']);
    this.router.navigate(['/portfolio/packagedesigningupdated']);
    this.router.navigate(['/portfolio/restaurantwebsitedevelopment']);
    this.router.navigate(['/portfolio/digitalmarketingstrategy']);
  }

  // Original list of cards
  allCards = [
    {  
      link: 'portfolio/socialmediapost',    
      title: 'Social Media Post',
      image: '../assets/images/portfolio images/social media post/socialmedia.jpg',
      category: 'social-media-post'
    },
    {
      link: 'portfolio/package-designing',  
      title: 'Package Designing',
      image: '../assets/images/portfolio images/package/package.jpg',
      category: 'package-designing'
    },
    {
      link: 'portfolio/school-youtube-channel-management',  
      title: 'School YouTube Channel Management',      
      image: '../assets/images/portfolio images/school youtube channel management/SchoolManagement.jpg',
      category: 'youtube-management'
    },
    {
      link: 'portfolio/package-designing-updated',  
      title: 'Package Designing (Updated)',
      image: '../assets/images/portfolio images/package designing(updated)/packagedesigning.jpg',
      category: 'package-designing-updated'
    },
    {
      link: 'portfolio/restaurant-website-development',  
      title: 'Restaurant Website Development',
      image: '../assets/images/portfolio images/restuarant website developement/restuarant.jpg',
      category: 'restaurant-website'
    },
    {
      link: 'portfolio/digital-marketing-strategy',  
      title: 'Digital Marketing Strategy',
      image: '../assets/images/portfolio images/digital marketing strategy/DigitalMarketing.jpg',
      category: 'digital-marketing'
    },
  ];

  filteredCards = [...this.allCards];
  showMode(category: string) {
    if (category === 'all') {
      this.filteredCards = [...this.allCards];
    } else {
      this.filteredCards = this.allCards.filter(card => card.category === category);
    }
  }
  visibleSection = 1;

  toggleSection(currentSection: number) {
    switch (currentSection) {
      case 1:
        this.visibleSection = 2;
        break;
      case 2:
        this.visibleSection = 3;
        break;
      case 3:
        this.visibleSection = 4;
        break;
      case 4:
        this.visibleSection = 5;
        break;
      case 5:
        this.visibleSection = 1;
        break;
      default:
        this.visibleSection = 1;
        break;
    }
  }
}
