import { Component } from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {SidebarComponent} from '../sidebar/sidebar.component';


@Component({
  selector: 'app-dashboard',
  imports: [
    FooterComponent,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
