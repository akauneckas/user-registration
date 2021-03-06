import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class GeocodingServiceMock {
    codeAddress(address: string): Observable<google.maps.GeocoderResult[]> {
        //should return response object
        return Observable.create((observer: Observer<google.maps.GeocoderResult[]>) => {        
        });
    }
}