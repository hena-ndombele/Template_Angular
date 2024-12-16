import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'exercice_applis';


  ngOnInit(): void {
    this.loadScript("assets/vendor/js/helpers.js");
    this.loadScript("assets/vendor/js/template-customizer.js");
    this.loadScript("assets/js/config.js");
    this.loadScript("assets/vendor/libs/jquery/jquery.js");
    this.loadScript("assets/vendor/libs/p::opper/popper.js"),
      this.loadScript("assets/vendor/js/bootstrap.js"),
      this.loadScript("assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"),
      this.loadScript("assets/vendor/libs/hammer/hammer.js"),
      this.loadScript("assets/vendor/js/menu.js"),
      this.loadScript("assets/js/main.js"),
      this.loadScript("assets/js/app-academy-course.js")
  }

  public loadScript(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}

