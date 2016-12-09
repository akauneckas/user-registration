import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
    // moduleId: module.id,
    selector: 'user-card',
    templateUrl: 'user-card.component.html'
})
export class UserCardComponent implements OnInit {

    private user: User;

    constructor(private userService: UserService) {
     }

    ngOnInit() {
        this.user = this.userService.getUser();
    }
}