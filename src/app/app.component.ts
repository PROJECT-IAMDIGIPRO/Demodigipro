import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styleUrl:'../styles.css'
})
export class AppComponent {
    
  isDigitalMarketingRoute = false;
  isConsultingRoute = false;
  isGraphicsRoute = false;
  isInfluencerRoute = false;
  isWebAppRoute = false;
  // PORTFOLIO
  isPortfolioRoute = false;
  // CONSULT US
  isConsultUsRoute = false;
  // CAREERS
  isInternshipRoute = false;
  isTrainingRoute = false;
  isJobOpportunityRoute = false;
  // ABOUT US
  isAboutUsRoute = false;
  isContactFormRoute = false;
  isLoginRoute = false;
  isSignUpRoute = false;
  isRegistrationRoute = false;
  // BLOGS
  isFutureBlogsRoute = false;
  isServiceRoute = false;
  // PRIVACY POLICY 
  isPrivacyPolicyRoute = false;
  isTermsRoute = false;
  isCookiesRoute = false;
  title: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateRouteFlags(event.url);
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isNavbarCollapsed = true;
         this.isDropdownOpen = null;
      }
    });
  }

  updateRouteFlags(url: string): void {
    this.isDigitalMarketingRoute = url.startsWith('/digitalmarketing');
    this.isConsultingRoute = url.startsWith('/consulting');
    this.isGraphicsRoute = url.startsWith('/graphicuidesign');
    this.isInfluencerRoute = url.startsWith('/influencermarket');
    this.isWebAppRoute = url.startsWith('/webappdevelopment');
    this.isPortfolioRoute = url.startsWith('/portfolio');
    this.isConsultUsRoute = url.startsWith('/consultus');
    this.isInternshipRoute = url.startsWith('/careers/internship');
    this.isTrainingRoute = url.startsWith('/careers/training');
    this.isJobOpportunityRoute = url.startsWith('/careers/jobopportunity');
    this.isAboutUsRoute = url.startsWith('/aboutus');
    this.isContactFormRoute = url.startsWith('/contact');
    this.isLoginRoute = url.startsWith('/login');
    this.isSignUpRoute = url.startsWith('/signup');
    this.isRegistrationRoute = url.startsWith('/registration');
    this.isFutureBlogsRoute = url.startsWith('/blogs');
    this.isPrivacyPolicyRoute = url.startsWith('/privacypolicy')
    this.isTermsRoute = url.startsWith('/terms');
    this.isCookiesRoute = url.startsWith('/cookies');

    this.isServiceRoute = this.isDigitalMarketingRoute || this.isConsultingRoute || this.isGraphicsRoute ||
    this.isInfluencerRoute || this.isWebAppRoute || this.isPortfolioRoute || 
    this.isConsultUsRoute || this.isInternshipRoute || this.isTrainingRoute || 
    this.isJobOpportunityRoute || this.isAboutUsRoute || this.isContactFormRoute || 
    this.isLoginRoute || this.isSignUpRoute || this.isRegistrationRoute || this.isFutureBlogsRoute 
    || this.isPrivacyPolicyRoute || this.isTermsRoute || this.isCookiesRoute;

  }

  navigateToKnowMore() {
    this.router.navigate(['/login']);
     this.router.navigate(['/sign-up']);
  }

isDropdownOpen: string | null = null;
isNavbarCollapsed = true;


toggleDropdown(dropdown: string): void {
  if (this.isDropdownOpen === dropdown) {
    this.isDropdownOpen = null; // Close the dropdown if it's already open
  } else {
    this.isDropdownOpen = dropdown; // Open the clicked dropdown
  }
}

openModal(modalId: string): void {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';  // Changed from 'block' to 'flex' to center content
    document.body.classList.add('modal-open');  // Add class to disable scrolling
  }
}

closeModal(modalId: string): void {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');  // Remove class to enable scrolling
  }
}

switchModal(hideModalId: string, showModalId: string): void {
  this.closeModal(hideModalId);
  this.openModal(showModalId);
}

toggleNavbar() {
  this.isNavbarCollapsed = !this.isNavbarCollapsed;
}

collapseNavbar() {
  this.isNavbarCollapsed = true;
  this.isDropdownOpen = null;
}
closeDropdown() {
  this.isDropdownOpen = null;
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

  faqs = [
    {
      question: 'What is digital marketing and why is it important for my business?',
      answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
      isOpen: false
    },
    {
      question: 'What is the process for developing a website with your company?',
      answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
      isOpen: false
    },
    {
      question: 'What graphic design services do you offer?',
      answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
      isOpen: false
    },
    {
      question: 'What is influencer marketing and how can it benefit my business?',
      answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
      isOpen: false
    },
    {
      question: 'Can you work with influencers on different social media platforms?',
      answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}