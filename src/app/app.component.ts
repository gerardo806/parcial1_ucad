import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parcial1Component } from './parcial-1/parcial-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Parcial1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial_uno';
}
