import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../shared/components/navbar/navbar.component';
// import AboutMeComponent from './pages/about-me/about-me.component';


@Component({
  standalone: true,
  imports: [ RouterModule, NavbarComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
