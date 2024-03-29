import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[]=[];

  @Input() title: string = "";

  @Output() selectedRoom  = new EventEmitter<RoomList>();

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room)
  }

  ngOnInit (): void{}
  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();

    }
  }


}
