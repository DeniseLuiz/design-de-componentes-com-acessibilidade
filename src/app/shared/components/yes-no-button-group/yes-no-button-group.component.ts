import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {

  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();

  options = YesNoButtonGroupOptions;

  constructor() { }

  ngOnInit(): void {
  }

  activate(value: string) {
    this.value = value;
    this.valueChange.emit(this.value);
    //output valueChange
  }
}

enum YesNoButtonGroupOptions {
  YES =  'yes',
  NO = 'no',
}
