import { Component, OnInit } from '@angular/core';
import { saferoom } from '../JsonData/saferoom';
@Component({
  selector: 'app-saferoom',
  templateUrl: './saferoom.component.html',
  styleUrls: ['./saferoom.component.scss']
})
export class SaferoomComponent implements OnInit {

  constructor() { }
  safedata:any;
  ngOnInit(): void {
    this.safedata=saferoom;
  }

}
