import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-importing-error',
  templateUrl: './importing-error.component.html',
  styleUrls: ['./importing-error.component.css']
})
export class ImportingErrorComponent {
  constructor(private router: Router) {}

  @Input() importErrorMessage: string = '';

  closePage() {
    this.router.navigate(['/']); // Navegar para a rota inicial
  }
}
