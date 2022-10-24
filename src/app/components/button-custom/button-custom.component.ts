import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.scss']
})
export class ButtonCustomComponent {

  @Input() btnType: string = ''
  @Input() text: string = ''

}
