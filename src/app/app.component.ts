import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">{{pageTitle}}</a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <a class='nav-link' routerLink='/Welcome'>Home </a>
      </li>
      <li class="nav-item">
      <a class='nav-link' routerLink='/product'>Product List</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container-fluid">
  <router-outlet></router-outlet>
</div>
` 

})

export class AppComponent {
  pageTitle:string = 'APM Product Management';
}
