import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.scss']
})
export class ButtonCustomComponent implements OnInit {

  @Input() btnType: string = ''
  @Input() text: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
