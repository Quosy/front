import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';

@Injectable()
export class MessageService {

    constructor(public snackBar: MatSnackBar) { }

    showMessage(customMessage: string) {
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: { message: customMessage },
            duration: 2500,
            panelClass: ['snackBar'],
            verticalPosition: 'top'
        });
    }

    showSucessMessage() {

    }

    showErrorMessage() {

    }

}
