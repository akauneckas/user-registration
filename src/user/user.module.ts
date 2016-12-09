import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { UserService } from './user.service';
import { AddressValidationSerivce } from '../common/services/address-validation.service';
import { SmallMapComponent } from '../common/components/small-map.component';

@NgModule({
    imports: [MaterialModule.forRoot(), ReactiveFormsModule],
    declarations: [UserComponent, UserFormComponent, UserCardComponent, SmallMapComponent],
    exports: [UserComponent],
    providers: [UserService, AddressValidationSerivce]
})

export class UserModule {

}
