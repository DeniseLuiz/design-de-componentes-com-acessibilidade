import { Component, Input, OnInit, EventEmitter, Output, forwardRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';


@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     multi: true,
  //     useExisting: forwardRef(() => YesNoButtonGroupComponent)
  //   }
  // ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() public disabled = false;
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public id: string = null;
  onChange = (value : string) => {};
  onTouched = () => {};

  options = YesNoButtonGroupOptions;

  constructor(
    @Optional() @Self() ngControl: NgControl,
    uniqueIdService: UniqueIdService,
  ) {
    ngControl.valueAccessor = this;
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
  }
  writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  registerOnChange(fn: (value: string) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

  activate(value: string) {
    // this.value = value;
    // this.valueChange.emit(this.value);   OLD
    this.writeValue(value);
    //output valueChange
  }
}

enum YesNoButtonGroupOptions {
  YES =  'yes',
  NO = 'no',
}
