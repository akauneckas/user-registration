import { Component, Input, OnInit} from '@angular/core';
import { Coordinates } from '../../interfaces/coordinates.interface';
declare var google: any;
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'google-map',
    templateUrl: 'google-map.component.html'
})
export class GooleMapComponent implements OnInit {
    @Input() coordinates: Coordinates = {
        lat: 0,
        lng: 0
    };
    
    constructor() { }

    ngOnInit() {
    let map = new google.maps.Map(document.getElementById('test'), {
          center: this.coordinates,
          zoom: 8
        });
    }
}

     