import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ApiService } from '../../../../shared/services/api.service';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
    constructor(
        private dialogRef: MatDialogRef<ConfirmDialogComponent>,
        private apiService: ApiService,
        @Inject(MAT_DIALOG_DATA) public data?
    ) {}

    agreeBtn(): void {
        this.apiService.delEntity('Faculty', this.data.faculty_id).subscribe(
            (res) => {
                if (res.response === 'ok') this.dialogRef.close(res.response);
            },
            (error) => {
                this.apiService.snackBarOpen();
            }
        );
    }
}
