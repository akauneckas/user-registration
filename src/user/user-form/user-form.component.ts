import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
    // moduleId: module.id,
    selector: 'user-form',
    templateUrl: 'user-form.component.html'
})
export class UserFormComponent implements OnInit {
    public userForm: FormGroup;
    public submitted: boolean;

    constructor(private _fb: FormBuilder, private userService: UserService) { }

    ngOnInit() {
           this.userForm = this._fb.group({
            name: ['', <any>Validators.required],
            surname: ['', <any>Validators.required],
            address: this._fb.group({
                town: ['', <any>Validators.required],
                street: ['', <any>Validators.required],
                houseNumber: [''],
                zipcode: ['']
            })
        });
    }

    save(model: User, isValid: boolean) {
        this.submitted = true;
        
        if(!isValid){
            return;
        }

        model.id = new Date().toString();
        this.userService.saveUser(model);
        console.log(model, isValid);
    }
}