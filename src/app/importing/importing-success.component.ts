import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-importing-success',
  templateUrl: './importing-success.component.html',
  styleUrls: ['./importing-success.component.css']
})
export class ImportingSuccessComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  totalRegistros: number = 0;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.totalRegistros = parseInt(params.get('totalRegistros') || '0');
    });
  }

  closePage() {
    this.router.navigate(['/']); // Navegar para a rota inicial
  }
}
