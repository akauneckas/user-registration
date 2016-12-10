import {  Directive, ElementRef, Input, OnInit} from '@angular/core';
import { Coordinates } from '../../interfaces/coordinates.interface';

@Directive({
     selector: '[googleMap]'
})

export class GooleMapDirective implements OnInit {

    @Input() coordinates: Coordinates = {
        lat: 0,
        lng: 0
    };

    @Input() formattedAddress: string = '';
    
    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.el.nativeElement.style.height = '100px';

        const map = new google.maps.Map(this.el.nativeElement, {
          center: this.coordinates,
          zoom: 8
        });

        const marker = new google.maps.Marker({
          position: this.coordinates,
          map: map,
          title: this.formattedAddress
        });
    }
}

     