import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{
 hotelName = 'Hilton hotel';
 numberOfRooms = 10;
 hideRooms = false;
 selectedRoom !: RoomList;
 title = 'Room List';

 @ViewChild(HeaderComponent, {static : true})  headerComponent !: HeaderComponent;

 @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;


 rooms: Room={
  totalRooms : 20,
  availableRooms: 10,
  bookedRooms: 5
 }

 roomList: RoomList[]= [{
  roomNumber: 234,
  roomType: 'Deluxe Room',
  amenities: 'Air Contdition, Free Wifi, Kitchen, TV, Bathroom',
  price: 1000,
  photos:"https://unsplash.com/s/photos/hotel-room" ,
  checkInTime: new Date('11-Nov-2021'),
  checkOutTime : new Date('12-Nov-2021'),
  rating: 4.5
 },
 {
  roomNumber: 234,
  roomType: 'Deluxe Room',
  amenities: 'Air Contdition, Free Wifi, Kitchen, TV, Bathroom',
  price: 1000,
  photos:"https://unsplash.com/s/photos/hotel-room" ,
  checkInTime: new Date('11-Nov-2021'),
  checkOutTime : new Date('12-Nov-2021'),
  rating: 4.8
 },
 {
  roomNumber: 234,
  roomType: 'Deluxe Room',
  amenities: 'Air Contdition, Free Wifi, Kitchen, TV, Bathroom',
  price: 1000,
  photos:"https://unsplash.com/s/photos/hotel-room" ,
  checkInTime: new Date('11-Nov-2021'),
  checkOutTime : new Date('12-Nov-2021'),
  rating: 3.5
 }]

 constructor(){}
  ngAfterViewChecked(): void {

  }

  ngAfterViewInit(): void {
    this.headerComponent.title= "Room View";
    this.headerChildrenComponent.last.title = "Last Titleg";

  }

  ngDoCheck(): void {
    console.log('onchange is called')
  }

  ngOnInit(): void {
    console.log(this.headerComponent);
   }

 toggle(){
  this.hideRooms= !this.hideRooms;
  this.title = 'Rooms List';
 }

 selectRoom (room : RoomList){
  this.selectedRoom = room;

 }

 addRoom(){
  const room: RoomList = {
    roomNumber : 4,
    roomType : 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wifi, TV, bathroom, kitchen',
    price : 500,
    photos: "https://unsplash.com/s/photos/hotel-room",
    checkInTime: new Date('11-Nov-2021'),
    checkOutTime : new Date('12-Nov-2021'),
    rating: 3.5


  }
  this.roomList= [...this.roomList, room];

 }


}
