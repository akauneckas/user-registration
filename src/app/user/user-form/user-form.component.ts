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
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.userForm = this._fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(emailRegex)]],
            address: this._fb.group({
                town: [''],
                street: [''],
                houseNumber: [''],
                zipcode: ['']
            })
        });
    }

    isRequired(formControl): boolean {
        return (formControl.invalid && this.submitted && formControl._errors.required) ||
               (formControl.touched && formControl.invalid && formControl._errors.required);
    }

    invalidPattern(formControl): boolean {
        return (formControl.invalid && this.submitted && formControl._errors.pattern) ||
               (formControl.touched && formControl.invalid && formControl._errors.pattern);
    }


    save(model: User, isValid: boolean) {
        this.submitted = true;

        if(!isValid){
            return;
        }
        
        this.userService.saveUser(model);
    }
}