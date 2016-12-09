import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { AddressValidationSerivce } from '../common/services/address-validation.service'

@Injectable()
export class UserService {

    readonly USER_KEY: string;

    constructor(private addressValidationSerivce: AddressValidationSerivce){
        this.USER_KEY = 'users';
    }
    //user id
    getUser(): User{
        return this.getUsers()[0];
    }

    getUsers(): User[] {       
        console.log('get');
        let users = new Array<User>();
        let usersKey = localStorage.getItem(this.USER_KEY);

        if(usersKey){
            users = JSON.parse(usersKey);
        }

        return users;
    }

    //return saved user id
    saveUser(user: User): void{
       console.log('save', user); 
       this.addressValidationSerivce.getCoordinates(this.addressValidationSerivce.formateAddress(user.address)).then((result) => {
           console.log('promise result', result);
           user.address.coordinates =  result;
            let users = this.getUsers();
            //check if user exists?
            users.push(user);
            localStorage.setItem(this.USER_KEY, JSON.stringify(users));
       }, (reason) => {
           console.log(reason);
       });
    }
}