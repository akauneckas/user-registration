import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule  } from '@angular/forms';

@NgModule({
    imports: [MaterialModule.forRoot(), ReactiveFormsModule],
    declarations: [UserComponent, UserFormComponent],
    exports: [UserComponent]
})

export class UserModule {

}
