import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  public message: string;
  public icon: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data['message'];
    this.icon = data['icon'];
  }

  ngOnInit() {
  }

}
