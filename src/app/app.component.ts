import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  OnButtonClicked(event:string){
    console.log("Você clicou no botão " + event);
  }
}
