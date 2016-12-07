import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { UserService } from './user.service';

@NgModule({
    imports: [MaterialModule.forRoot(), ReactiveFormsModule],
    declarations: [UserComponent, UserFormComponent],
    exports: [UserComponent],
    providers: [UserService]
})

export class UserModule {

}
