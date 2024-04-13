import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CheckboxModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InputMaskModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  public registrationForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.registrationForm = this._fb.group({
      email: this._fb.control('', [Validators.required]),
      password: this._fb.control('', [Validators.required]),
      confirmPassword: this._fb.control(''),
      firstName: this._fb.control('', [Validators.required]),
      lastName: this._fb.control('', [Validators.required]),
      address: this._fb.control('', [Validators.required]),
      phoneNumber: this._fb.control('', [Validators.required]),
    });
  }

  public onSubmit() {}
}
