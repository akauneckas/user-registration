import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `<div>
                 <md-input placeholder="amount" align="end">
                    <span md-prefix>$&nbsp;</span>
                    <span md-suffix>.00</span>
                  </md-input>
               </div>`
})
export class UserComponent {}
