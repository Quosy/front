import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { snackBarComponent } from '../components/snackBarComponent';

@Injectable()
export class LoginService {

    constructor(public snackBar: MatSnackBar) { }

    showMessage() {
        this.snackBar.openFromComponent(snackBarComponent, {
            duration: 500,
          });
    }

    showSucessMessage() {

    }

    showErrorMessage() {

    }

}