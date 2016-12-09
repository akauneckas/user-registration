import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { UserService } from './user.service';
import { SmallMapComponent } from '../common/components/small-map.component';
import { GeocodingService } from '../common/services/geocoding.service'
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { MessageService } from '../common/services/message.service';

@NgModule({
    imports: [MaterialModule.forRoot(), ReactiveFormsModule, ToastModule],
    declarations: [UserComponent, UserFormComponent, UserCardComponent, SmallMapComponent],
    exports: [UserComponent],
    providers: [UserService, GeocodingService, MessageService]
})

export class UserModule {

}
