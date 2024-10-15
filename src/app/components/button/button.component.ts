import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {  
    @Input({alias:'buttonText', required: true}) buttonText:string = '';
    @Input({alias:'styles'}) buttonClass: 'green' | 'white' = "white";
    @Output('emit') buttonClicked = new EventEmitter<string>();
    onButtonClicked(){
      this.buttonClicked.emit(this.buttonText);
    }
}
