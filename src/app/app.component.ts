import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListComponent, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-strapi';
}
