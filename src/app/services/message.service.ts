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

    showSucessMessage(succesMessage: string) {
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: { message: succesMessage, icon : 'done' },
            duration: 250000,
            panelClass: ['snackBarSuccess'],
            verticalPosition: 'top'
        });
    }

    showErrorMessage(errorMessage: string) {
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: { message: errorMessage, icon : 'clear' },
            duration: 250000,
            panelClass: ['snackBarError'],
            verticalPosition: 'top'
        });
    }

}
