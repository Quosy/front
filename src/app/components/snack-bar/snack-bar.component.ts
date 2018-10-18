import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent {

  public message: string;
  public icon: string;

  constructor(public snackRef: MatSnackBarRef<SnackBarComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data['message'];
    this.icon = data['icon'];
  }

  close() {
    this.snackRef.dismiss();
  }

}
