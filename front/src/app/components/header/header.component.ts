import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton, SelectButtonModule } from 'primeng/selectbutton';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CreationDialogComponent } from '../creation-dialog/creation-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SelectButtonModule, FormsModule, ButtonModule, ToastModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [DialogService],
})
export class HeaderComponent {
  @ViewChild('card') private card: SelectButton | undefined;
  private ref: DynamicDialogRef | undefined;
  constructor(private dialogService: DialogService) {}
  public stateOptions: any[] = [
    { label: 'Kaspi', value: 'Kaspi' },
    { label: 'Halyk', value: 'Halyk' },
  ];

  public value: string = 'Kaspi';

  public addNewBank() {
    this.ref = this.dialogService.open(CreationDialogComponent, {
      header: 'Add New Card',
      width: '50vw',
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });

    this.ref.onClose.subscribe((data: any) => {
      const option = {
        label: data.name,
        value: data.name,
        cardNumber: data.cardNumber,
        expirationDate: data.expirationDate,
      };
      this.stateOptions.push(option);
      console.log(data, this.stateOptions);
      if (this.card) {
        this.card.style = {};
        this.card.value = data.name;
      }
    });
  }
}
