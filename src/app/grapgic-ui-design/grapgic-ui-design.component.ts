import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grapgic-ui-design',
  templateUrl: './grapgic-ui-design.component.html',
  styleUrl: './grapgic-ui-design.component.css'
})
export class GrapgicUiDesignComponent {

  constructor(private router: Router) {}

  navigateToKnowMore() {
    this.router.navigate(['/graphicuidesign/branding']);
    this.router.navigate(['/graphicuidesign/logo-design']);
    this.router.navigate(['/graphicuidesign/uiux-design']);
  }


}
