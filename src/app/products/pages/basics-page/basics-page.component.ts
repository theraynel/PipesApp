import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'raynel';
  public nameUpper: string = 'RAYNEL';
  public fullName: string = 'rAYnel FeLiZ'

  public customDate: Date = new Date();

}
