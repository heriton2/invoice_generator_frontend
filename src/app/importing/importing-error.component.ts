import {Component, Input} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-importing-error',
  templateUrl: './importing-error.component.html',
  styleUrls: ['./importing-error.component.css']
})
export class ImportingErrorComponent {
  constructor(private router: Router,  private route: ActivatedRoute) {}

  importErrorMessage: string = '';

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.importErrorMessage = params.get('importErrorMessage') || '';
    });
  }

  closePage() {
    this.router.navigate(['/']); // Navegar para a rota inicial
  }
}
