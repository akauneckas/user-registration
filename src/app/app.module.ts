import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AppRoutingModule }  from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '@angular/material';


@NgModule({
    imports: [BrowserModule, AppRoutingModule, UserModule,  MaterialModule.forRoot()],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
    
}
