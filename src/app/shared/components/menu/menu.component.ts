import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public menuBarItems: MenuItem[] = [];

  ngOnInit() {
      this.menuBarItems = [
          {
            label: 'Pipes de Angular',
            icon:  'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Numeros',
                icon: 'pi pi-dollar',
                routerLink: 'numbers'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: 'uncommon'
              },
            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items:[
              {
                label: 'Custom',
                icon: 'pi pi-cog',
                routerLink: 'custom'
              }
            ]
          }
      ];
  }
}
