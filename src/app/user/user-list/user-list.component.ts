import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
    selector: 'user-list',
    templateUrl: 'user-list.component.html'
})

export class UserListComponent {
    
    public users: User[];

    constructor(private userSerivce: UserService){}

    ngOnInit() {
        this.userSerivce.getUsers().subscribe(results => {
            this.users = results;
        });
    }
}
       
