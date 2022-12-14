import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = null;
  title = 'Acessibilidade';

  constructor( private fb: FormBuilder ) {
    this.form = this.fb.group({
      yesNoAnswer: [{
        value: null,
        disabled: true
      }]
    })
  }

  public submit() {
    console.log(this.form.value);
  }
}
