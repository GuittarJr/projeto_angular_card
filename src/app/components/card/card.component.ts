import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true}) preco = '';
  @Input({required: true}) plano = '';
  @Input() buttonColor: 'green' | 'white' = "green";
  @Input('bgColor') bgColor: 'orange' | 'purple' = 'orange'; 
  OnButtonClicked(event:string){
    console.log(this.plano)
  }
}
