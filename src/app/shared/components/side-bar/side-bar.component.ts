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

  subMenuShow = false
  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: '',
        router: ['/', 'Welcome'],
        subItems: []
      },
      {
        name: 'Compuing',
        icon: '',
        router: ['/', 'computing'],
        subItems: []
      },
      {
        name: 'Networking',
        icon: '',
        router: ['/', 'networking'],
        subItems: [{
          name: 'Firewall Rules',
          icon: '',
          router: ['/', 'networking/firewallRules'],
        },{
          name: 'Firewall Objects',
          icon: '',
          router: ['firewallObjects'],
        }
      ]
      },
      {
        name: 'Infrastructure',
        icon: '',
        router: ['/', 'infrastructure'],
        subItems: []
      },
    ]
  }

  showSubmenu(selected:string): void{
    const subMenu = this.mainMenu.defaultOptions.filter(obj => {return obj.name == selected})
    if (Object.keys(subMenu[0]?.subItems).length !== 0){
    this.subMenuShow = !this.subMenuShow
    }
  }

  checkSubMenu(selected:string){
    const subMenu = this.mainMenu.defaultOptions.filter(obj => {return obj.name == selected})
    if (Object.keys(subMenu[0]?.subItems).length !== 0 ){
      return true
    }
    else {
      return false
    }
  }

  testComponent(selected:Array<any>): void {
    console.log(selected)
  }
}
