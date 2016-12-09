import { Injectable } from '@angular/core';
import { Address } from '../interfaces/address.interface';
import { Coordinates } from '../interfaces/coordinates.interface';
declare var google: any;

@Injectable()
export class AddressValidationSerivce {

    constructor(){
        console.log('validation service');
    }

    getCoordinates(address: string) : Promise<any> {
        let geocoder = new google.maps.Geocoder(),
            coordinates: Coordinates = {
                lat: '',
                lng: ''
            };

       return new Promise((resolve, reject) => {      
                geocoder.geocode({'address': address}, (results, status) => {
                    if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
                        let location =  results[0].geometry.location;
                        console.log('results[0]', results[0].geometry.location.lat());
                        coordinates.lat = location.lat();
                        coordinates.lng = location.lng();
                        resolve(coordinates);
                        // set it to the correct, formatted address if it's valid
                        // addr.value = results[0].formatted_address;;

                        // show an error if it's not
                        }else {
                            reject("Invalid address");
                        }
                });
       });
    }

    formateAddress(address: Address): string{
        return Object.values(address).join(' ');
    }
}