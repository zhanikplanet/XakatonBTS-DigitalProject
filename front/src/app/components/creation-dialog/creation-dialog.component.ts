import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creation-dialog',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputMaskModule,
    ButtonModule,
    DividerModule,
    CommonModule,
  ],
  templateUrl: './creation-dialog.component.html',
  styleUrl: './creation-dialog.component.scss',
})
export class CreationDialogComponent {
  constructor(private _fb: FormBuilder, private _dialogRef: DynamicDialogRef) {
    this.cardForm = this._fb.group({
      name: this._fb.control('', [Validators.required]),
      cardNumber: this._fb.control(0, [Validators.required]),
      expirationDate: this._fb.control(null, [Validators.required]),
    });
  }

  public cardForm: FormGroup;
  public isInvalid: boolean = false;

  public onSubmit() {
    if (this.cardForm.invalid) {
      this.isInvalid = true;
      return;
    }
    this._dialogRef.close(this.cardForm.value);
  }
}
