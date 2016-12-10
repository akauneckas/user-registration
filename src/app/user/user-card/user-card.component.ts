import { Component, Input } from '@angular/core';
import { User } from '../user.interface';

@Component({
    // moduleId: module.id,
    selector: 'user-card',
    templateUrl: 'user-card.component.html'
})
export class UserCardComponent {
   @Input() user: User;

    constructor() {}
}