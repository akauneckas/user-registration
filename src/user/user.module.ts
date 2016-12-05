import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { UserComponent } from './user.component';

@NgModule({
    imports: [MaterialModule.forRoot()],
    declarations: [UserComponent],
    exports: [UserComponent]
})

export class UserModule {

}
