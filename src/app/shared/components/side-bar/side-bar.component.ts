import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  mainMenu: { defaultOptions: Array<any>} = { defaultOptions: [] }

  constructor(private sideBarRouter:Router){}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: '',
        router: ['/', 'Welcome'],
        subItems: {}
      },
      {
        name: 'Compuing',
        icon: '',
        router: ['/', 'computing'],
        subItems: {}
      },
      {
        name: 'Networking',
        icon: '',
        router: ['/', 'networking'],
        subItems: {
          name: 'Firewall',
          icon: '',
          router: ['/', 'networking/firewall'],
        }
      },
      {
        name: 'Infrastrucutre',
        icon: '',
        router: ['/', 'infrasructure'],
        subItems: {}
      },
    ]
  }
}
