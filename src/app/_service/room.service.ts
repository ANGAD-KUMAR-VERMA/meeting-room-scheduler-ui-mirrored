import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../_model/room.model';
import { ConstantService } from './constant.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient,
    private cons: ConstantService) { }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.cons.baseURI + this.cons.fetchRooms);
  }


}