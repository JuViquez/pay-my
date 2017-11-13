import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'PayMy';
  lat: number = 9.8570479;
  lng: number = -83.9124213;
  zoom: number = 15;
}
