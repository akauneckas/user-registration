import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AppRoutingModule }  from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '@angular/material';
import '../../node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css';
import '../../node_modules/ng2-toastr/bundles/ng2-toastr.min.css';


@NgModule({
    imports: [BrowserModule, AppRoutingModule, UserModule,  MaterialModule.forRoot()],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
    
}
