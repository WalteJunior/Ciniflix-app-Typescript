import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  public appMenu =[
    {title: 'Teste1', URL: '/teste1', icon: 'list'},
    {title: 'Teste2', URL: '/teste2', icon: 'add'},
    {title: 'Teste3', URL: '/teste3', icon: 'trash'}
  ];
}
