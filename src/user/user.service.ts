import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { GeocodingService } from '../common/services/geocoding.service';
import { MessageService } from '../common/services/message.service';


@Injectable()
export class UserService {

    readonly USER_KEY: string;

    constructor(private geocodingService: GeocodingService, private messageSerice: MessageService){
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
       //return status
       this.geocodingService.codeAddress(Object.values(user.address).join(' ')).subscribe(
           results => {
               //check es6 features
                let users = this.getUsers();
                user.address.coordinates = {
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                }

                user.formattedAddress = results[0].formatted_address;
                users.push(user);
                localStorage.setItem(this.USER_KEY, JSON.stringify(users));
                this.messageSerice.showSuccessMessage('User saved successfully');
            },
           error => {
                this.messageSerice.showErrorMessage('Wrong user address');
           }
        );
    }
}