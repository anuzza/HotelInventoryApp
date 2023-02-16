import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements AfterViewInit{

  title = 'hotelinventoryapp';
  role= 'Admin';

  // @ViewChild('user', {read: ViewContainerRef}) vcr !: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }

}
