import { Component } from '@angular/core';
// import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild(HomeComponent) home;

  title = 'Testing Angular';

  // ngAfterViewInit() {
  //   console.log('home- > ',this.home);
  //   // if(this.home.name.length() == 0){
  //   //   this.title = 'Testing Angular';
  //   // } else {
  //   //   this.title = this.home.name;
  //   // }
  // }

}
