import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app',
    template: `<div>
                  <user></user>  
               </div>`
})
export class AppComponent {

        constructor( private toastr: ToastsManager, private vRef: ViewContainerRef){}

        ngOnInit() {
            this.toastr.setRootViewContainerRef(this.vRef);     
        }
}
       
