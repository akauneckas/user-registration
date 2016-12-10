import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable() export class GeocodingService {

   private geocoder: google.maps.Geocoder;

    constructor() {
        this.geocoder = new google.maps.Geocoder();
    }

    codeAddress(address: string): Observable<google.maps.GeocoderResult[]> {
        return new Observable((observer: Observer<google.maps.GeocoderResult[]>) => {
            // Invokes geocode method of Google Maps API geocoding.
            this.geocoder.geocode({ 'address': address }, (
                // Results & status.
                (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
                    if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
                        observer.next(results);
                        observer.complete();
                    } else {
                        console.log('Geocoding service: geocode was not successful for the following reason: ' + status);
                        observer.error(status);
                    }
                })
            );
        });
    }
}