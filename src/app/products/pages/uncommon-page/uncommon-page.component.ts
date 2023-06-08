import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
   public name: string = 'Raynel';
   public gender: 'male'|'female' = 'male';
   public invitationMap = {
     male: 'invitarlo',
     female: 'invitarla'
   }

   changeClient(): void {
     this.name = "Jenniffer";
     this.gender ='female';
   }

   // i18n Plural
   public clients: string[] = ['Raynel', 'Jenniffer', 'Eriber', 'Elvin', 'Valentin', 'Josue','Pedro'];
   public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',
   }

   deleteClients(): void {
     this.clients.shift();
   }

   // KeyValue Pipe
   public person =
   {
     name: 'Raynel',
     age: 29,
     address: 'Santo Domingo, Rep. Dom.'
   }

   // Async Pipe
   public myObservableTime = interval(2000).pipe(
     tap( value => console.log('tap', value)  )
   )

   public promiseValue: Promise<string> = new Promise( (resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');

    }, 3500);
   })
}
