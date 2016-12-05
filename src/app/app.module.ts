import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserModule } from '../user/user.module';

@NgModule({
    imports: [BrowserModule, FormsModule, UserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
    
}
