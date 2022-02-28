import { Component, OnInit } from '@angular/core';
import { DataResultListPhoneDetailDTO, PhoneDetailDTO, PhoneRestControllerService } from 'src/app/api';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  phoneListData: DataResultListPhoneDetailDTO | undefined;
  constructor(private phoneService: PhoneRestControllerService) { }

  ngOnInit(): void {
    this.getPhoneDetails();
  }
  getPhoneDetails() {
    this.phoneService.fetchAllPhones().subscribe(phones => {
      this.phoneListData = phones
      this.phoneListData.data?.forEach((phoneData: PhoneDetailDTO)=>{
        if (phoneData.valid) {
          phoneData.validString = 'Valid';
        } else {
          phoneData.validString = 'Not Valid';
        }
      })
    })
  }

}
