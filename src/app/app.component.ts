import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    HomeComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular 18 tour';
  subTitle = 'Angular for beginners';
  todayDate = new Date();
  salary = '1000';
  _obj = {"name": "Dulan"};
}
