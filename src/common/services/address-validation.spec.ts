// import { TestBed, inject } from '@angular/core/testing';
// import { Injector } from '@angular/core';
// import { AddressValidationSerivce } from './address-validation.service';

// describe('Address validation service', () => {
//     let addressValidationSerivce: AddressValidationSerivce;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             providers: [
//                 { provide: AddressValidationSerivce, useClass: AddressValidationSerivce}
//             ]
//         });
//     });

//     beforeEach(inject([Injector], (injector: Injector) => {
//         addressValidationSerivce = injector.get(AddressValidationSerivce);
//     }));

//     it('Should pass', () => {
//         expect(true).toEqual(true);
//     })

//     //   it('Should translate markdown to HTML!', 
//     //     inject([AddressValidationSerivce], (addressValidationSerivce) => {

//     //     expect(addressValidationSerivce).toBeDefined();
//     //   }));
// });

import { TestBed, inject } from '@angular/core/testing';
import { AddressValidationSerivce } from './address-validation.service';

describe('Address validation serivce', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddressValidationSerivce
      ]
    });
  });

  it('Should check if service defined!', 
    inject([AddressValidationSerivce], (markdownService) => {

    expect(markdownService).toBeDefined();
  }));
});