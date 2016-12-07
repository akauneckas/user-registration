import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable()
export class UserService {

    readonly USER_KEY: string;

    constructor(){
        this.USER_KEY = 'users';
    }
    //user id
    getUser(): void{

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
        let users = this.getUsers();
        //check if user exists?
        users.push(user);
        localStorage.setItem(this.USER_KEY, JSON.stringify(users));
    }
}