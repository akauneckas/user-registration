import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserService } from '../user.service'; 
// import {By} from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { MaterialModule } from '@angular/material';
import { GooleMapDirective } from '../../common/directives/google-map/google-map.directive';
import { GeocodingService } from '../../common/services/geocoding.service';
import { GeocodingServiceMock } from '../../common/services/geocoding.service.mock';
import { MessageServiceMock } from '../../common/services/message.service.mock';
import { MessageService } from '../../common/services/message.service';
 
describe('User list component', () => { 

  let fixture, comp;
  let userService: UserService;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ UserListComponent, UserCardComponent, GooleMapDirective],

            providers: [
                {provide: UserService, useClass: UserService},
                {provide: GeocodingService, useClass: GeocodingServiceMock},
                {provide: MessageService, useClass: MessageServiceMock}
            ],
            imports: [MaterialModule.forRoot()]
        });   

        fixture = TestBed.createComponent(UserListComponent);
        comp = fixture.componentInstance;
        userService = fixture.debugElement.injector.get(UserService);
    }));

    it('should render two user cards', fakeAsync(() => {      

        let user1 = {
                id: '',
                name: 'John',
                surname: '',
                email: '',
                formattedAddress: '',
                address: {
                    town: '',
                    street: '',
                    houseNumber: '',
                    zipcode: '',
                    coordinates: {
                        lat: 0,
                        lng: 0
                    }
                }
            };

        let user2 = {
                id: '',
                name: 'Peter',
                surname: '',
                email: '',
                formattedAddress: '',
                address: {
                    town: '',
                    street: '',
                    houseNumber: '',
                    zipcode: '',
                    coordinates: {
                        lat: 0,
                        lng: 0
                    }
                }
            }

            let users = [user1, user2];

            spyOn(userService, 'getUsers').and.returnValue(Observable.of(users));
            fixture.detectChanges();
            tick();
            fixture.detectChanges();
            const nativeElement = fixture.nativeElement;
            const userCards = nativeElement.querySelectorAll('.user-card');
            expect(userCards.length).toEqual(2);
    }));

    it('should not render user cards', fakeAsync(() => {      
            let users = [];

            spyOn(userService, 'getUsers').and.returnValue(Observable.of(users));
            fixture.detectChanges();
            tick();
            fixture.detectChanges();
            const nativeElement = fixture.nativeElement;
            const userCards = nativeElement.querySelectorAll('.user-card');
            expect(userCards.length).toEqual(0);
    }));

    it('should show header "User list"', () => {
        const nativeElement = fixture.nativeElement;
        const element = nativeElement.querySelector('h3');
        expect(element.textContent).toBe('User list');
    });

  
});