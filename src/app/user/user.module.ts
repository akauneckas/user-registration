import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { UserService } from './user.service';
import { GooleMapComponent } from '../common/components/google-map/google-map.component';
import { GeocodingService } from '../common/services/geocoding.service'
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { MessageService } from '../common/services/message.service';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    imports: [UserRoutingModule, MaterialModule.forRoot(), ReactiveFormsModule, ToastModule],
    declarations: [UserComponent, UserFormComponent, UserCardComponent, GooleMapComponent, UserListComponent],
    exports: [UserComponent],
    providers: [UserService, GeocodingService, MessageService]
})

export class UserModule {

}