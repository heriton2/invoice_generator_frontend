import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isInitialRoute: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifica se a rota é a inicial e atualiza a exibição da tabela
        this.isInitialRoute = this.checkInitialRoute();
      }
    });
  }

  checkInitialRoute(): boolean {
    return this.router.routerState.snapshot.root.firstChild?.routeConfig?.path === '';
  }
}
