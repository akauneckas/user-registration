import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class MessageService {

    constructor(private toastr: ToastsManager){
    }

    showSuccessMessage(message: string) : void {
        this.toastr.success(message);
    }

    showErrorMessage(message: string) : void {
        this.toastr.error(message);
    }
}