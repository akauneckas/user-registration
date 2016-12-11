import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { UserService } from './user.service';
import { GeocodingService } from '../common/services/geocoding.service';
import { GeocodingServiceMock } from '../common/services/geocoding.service.mock';
import { MessageServiceMock } from '../common/services/message.service.mock';
import { MessageService } from '../common/services/message.service';
import { Observable } from 'rxjs/Rx';

describe('User serivce', () => {
    let userService: UserService;
    let geocodingService: GeocodingService;
    let messageService: MessageService;
            let user = {
            id: '',
            name: '',
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

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: UserService, useClass: UserService},
                {provide: GeocodingService, useClass: GeocodingServiceMock},
                {provide: MessageService, useClass: MessageServiceMock}
            ]
        });
    });

    beforeEach(inject([Injector], (injector: Injector) =>{
        userService = injector.get(UserService);
        geocodingService = injector.get(GeocodingService);
        messageService = injector.get(MessageService);
    }));

    describe('Save', () => {

        it('Should fail when geocodingService fails', fakeAsync(() => { 
            spyOn(geocodingService, 'codeAddress').and.returnValue(Observable.throw({}));

            userService.save(user).subscribe(result => {},
            error => {
                expect(error).toBeDefined();
            });

            // tick();
        }));

        it('Should return true when geocodingService succeeds', fakeAsync(() => { 
            // spyOn(geocodingService, 'codeAddress').and.returnValue(new Observable<google.maps.GeocoderResult[]>);

            userService.save(user).subscribe(result => {
                expect(result.success).toEqual(true);
            })

            // tick();
        }));
    });
});