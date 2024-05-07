import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-networking-page',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './networking-page.component.html',
  styleUrl: './networking-page.component.css'
})
export class NetworkingPageComponent {

}
