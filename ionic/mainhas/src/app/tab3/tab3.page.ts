import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router) {}

  campanhas() {
    this.router.navigateByUrl('campanhas');
  }

  acoes() {
    this.router.navigateByUrl('acoes');
  }

  projetos() {
    this.router.navigateByUrl('projetos');
  }
}
