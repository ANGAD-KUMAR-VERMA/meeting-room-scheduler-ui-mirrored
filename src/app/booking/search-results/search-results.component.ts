import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';
import { Booking } from 'src/app/_model/booking.model';
import { BookingService } from 'src/app/_service/booking.service';
import { ConstantService } from 'src/app/_service/constant.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  bookingList: Booking[];
  userID: string;
  searchClick: boolean;

  message: String;
  showMessge: boolean;

  errorMsg: any;
  successMsg: any;

  constructor(private authService: AuthService, private bookingService: BookingService,
    private cons: ConstantService) {

  }

  ngOnInit() {
    this.errorMsg = '';
    this.successMsg = '';
    this.bookingService.currentMessage.subscribe(data => {
      this.errorMsg = '';
      this.successMsg = '';
      this.bookingList = data;
    })

  }

  cancelBookedRoom(booking: Booking) {
    this.errorMsg = '';
    this.successMsg = '';
    var bookID = booking.bookingId;
    this.bookingService.cancelBooking(Number(bookID)).subscribe(
      data => this.handleCanceledData(data, booking),
      err => this.handleError(err)
    )

  }

  handleCanceledData(data: any, booking: Booking) {
    this.bookingList.forEach((item, index) => {
      if (item === booking) this.bookingList.splice(index, 1);
    });
    this.successMsg = data.message;
  }


  handleError(err: HttpErrorResponse) {
    this.errorMsg = err.message;
  }

  doCancelButtonEnabled(empID: string) {
    this.userID = localStorage.getItem(this.cons.userId)
    if (this.userID == empID) {
      return true;
    }
    else {
      return false;
    }
  }

}
