import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { GeocodingService } from '../common/services/geocoding.service';
import { MessageService } from '../common/services/message.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


@Injectable()
export class UserService {

    readonly USER_KEY: string;

    constructor(private geocodingService: GeocodingService, private messageSerice: MessageService){
        this.USER_KEY = 'users';
    }

    getUsers(): Observable<User[]> {   
        return Observable.create((observer: Observer<User[]>) => {
            let users = new Array<User>();
            const usersKey = localStorage.getItem(this.USER_KEY);

            if(usersKey){
                users = JSON.parse(usersKey);
            }

            observer.next(users);
            observer.complete(); 
        });
    }

    save(user: User): Observable<{ success: boolean }> {
        return Observable.create((observer: Observer<{ success: boolean }>) => {
            this.geocodingService.codeAddress(Object.values(user.address).join(' ')).subscribe(
                results => {

                    user.address.coordinates = {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    }
                    
                    user.formattedAddress = results[0].formatted_address;

                    this.saveToDb(user).subscribe(result => {
                        observer.next(result);
                        observer.complete();
                    });
            
                },
                error => {
                    this.messageSerice.showErrorMessage('Invalid user address');
                    observer.next({success: false});
                    observer.complete();
                });
        });
    }

    private saveToDb(user: User): Observable<{ success: boolean }> {       
        return Observable.create((observer: Observer<{ success: boolean }>) => {
            this.getUsers().subscribe(results => {
                let users = results;
                users.push(user);     
                localStorage.setItem(this.USER_KEY, JSON.stringify(users));
                this.messageSerice.showSuccessMessage('User was saved successfully');

                observer.next({success: true});
                observer.complete();
            });
        });
    }
}