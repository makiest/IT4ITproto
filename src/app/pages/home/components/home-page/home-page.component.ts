import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../../../shared/components/side-bar/side-bar.component';
import { HeaderBarComponent } from '../../../../shared/components/header-bar/header-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet,SideBarComponent,HeaderBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
