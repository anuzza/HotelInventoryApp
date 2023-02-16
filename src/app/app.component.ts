import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{

  title = 'hotelinventoryapp';
  role= 'Admin';

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit(): void{
    this.name.nativeElement.innerText = "Hilton Hotel";

  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr !: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }

}
