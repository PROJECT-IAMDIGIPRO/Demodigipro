import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.css'
})
export class ConsultingComponent {
  constructor(private router: Router) {}

  navigateToKnowMore() {
    this.router.navigate(['/consulting/businessstrategy']);
    this.router.navigate(['/consulting/digitaltranformantion']);
  }

}
