import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { InternshipComponent } from './internship/internship.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegistrationComponent } from './registration/registration.component';
import { TrainingComponent } from './training/training.component';
import { WebAppDevelopmentComponent } from './web-app-development/web-app-development.component';
import { GrapgicUiDesignComponent } from './grapgic-ui-design/grapgic-ui-design.component';
import { InfluencerMarketingComponent } from './influencer-marketing/influencer-marketing.component';
import { SeoCardComponent } from './seo-card/seo-card.component';
import { JobOpportunityComponent } from './job-opportunity/job-opportunity.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ConsultUsComponent } from './consult-us/consult-us.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SocialMediaPostComponent } from './social-media-post/social-media-post.component';
import { PackageDesigningComponent } from './package-designing/package-designing.component';
import { SchoolYoutubeChannelComponent } from './school-youtube-channel/school-youtube-channel.component';
import { RestaurantWebsiteDevelopmentComponent } from './restaurant-website-development/restaurant-website-development.component';
import { DigitalMarketingStrategyComponent } from './digital-marketing-strategy/digital-marketing-strategy.component';
import { PackageDesigningUpdateComponent } from './package-designing-update/package-designing-update.component';
import { SmmComponent } from './smm/smm.component';
import { PpcComponent } from './ppc/ppc.component';
import { ContentMarketingComponent } from './content-marketing/content-marketing.component';
import { EmailMarketingComponent } from './email-marketing/email-marketing.component';
import { BrandingComponent } from './branding/branding.component';
import { LogoDesignComponent } from './logo-design/logo-design.component';
import { UiUxDesignComponent } from './ui-ux-design/ui-ux-design.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { AppDevComponent } from './app-dev/app-dev.component';
import { CampingStrategyComponent } from './camping-strategy/camping-strategy.component';
import { InfluencerMarketingOutreachComponent } from './influencer-marketing-outreach/influencer-marketing-outreach.component';
import { BrandPartnershipComponent } from './brand-partnership/brand-partnership.component';
import { ContentCreationComponent } from './content-creation/content-creation.component';
import { BusinessStrategyComponent } from './business-strategy/business-strategy.component';
import { DigitalTransformationComponent } from './digital-transformation/digital-transformation.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';

const routes: Routes = [

  { path: '', redirectTo: '#', pathMatch: 'full' },  // Default route to login
  // SERVICES
  { path: 'digitalmarketing', component: DigitalMarketingComponent },
  { path: 'webappdevelopment', component: WebAppDevelopmentComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'graphicuidesign', component: GrapgicUiDesignComponent },
  { path: 'influencermarketing', component: InfluencerMarketingComponent },
  // SERVICE CARDS
  { path: 'digitalmarketing/seo', component: SeoCardComponent },
  { path: 'digitalmarketing/ppc', component: PpcComponent },
  { path: 'digitalmarketing/smm', component: SmmComponent },
  { path: 'digitalmarketing/contentmarketing', component: ContentMarketingComponent },
  { path: 'digitalmarketing/emailmarketing', component: EmailMarketingComponent },
  { path: 'graphicuidesign/branding', component: BrandingComponent },
  { path: 'graphicuidesign/logodesign', component: LogoDesignComponent },
  { path: 'graphicuidesign/uiuxdesign', component: UiUxDesignComponent },
  { path: 'webappdevelopment/frontend', component: FrontendComponent },
  { path: 'webappdevelopment/backend', component: BackendComponent },
  { path: 'webappdevelopment/fullstack', component: FullstackComponent },
  { path: 'webappdevelopment/appdev', component: AppDevComponent },
  { path: 'influencermarketing/campaignstrategy', component: CampingStrategyComponent },
  { path: 'influencermarketing/influenceroutreach', component: InfluencerMarketingOutreachComponent},
  { path: 'influencermarketing/brandpartnership', component: BrandPartnershipComponent},
  { path: 'influencermarketing/contentcreation', component: ContentCreationComponent},
  { path: 'consulting/businessstrategy', component: BusinessStrategyComponent},
  { path: 'consulting/digitaltranformantion', component: DigitalTransformationComponent},
  // CAREERS
  { path: 'careers/training', component: TrainingComponent },
  { path: 'careers/internship', component: InternshipComponent },
  { path: 'careers/jobopportunity', component: JobOpportunityComponent },
  // ABOUT-US & LOGIN & ETC
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'consultus', component: ConsultUsComponent },
  { path: 'registration', component: RegistrationComponent },
  {path:'terms',component: TermsComponent},
  {path:'privacypolicy',component: PrivacyPolicyComponent},
  {path:'cookies',component:CookiesPolicyComponent},
  // PORTFOLIO & CARDS
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/socialmediapost', component:SocialMediaPostComponent},
  { path: 'portfolio/packagedesigning', component:PackageDesigningComponent},
  { path: 'portfolio/schoolyoutubechannelmanagement', component:SchoolYoutubeChannelComponent},
  { path: 'portfolio/packagedesigningupdated', component:PackageDesigningUpdateComponent},
  { path: 'portfolio/restaurantwebsitedevelopment', component:RestaurantWebsiteDevelopmentComponent},
  { path: 'portfolio/digitalmarketingstrategy', component:DigitalMarketingStrategyComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
