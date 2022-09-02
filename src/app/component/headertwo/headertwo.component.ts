import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddbuttonComponent } from '../addbutton/addbutton.component';

@Component({
  selector: 'app-headertwo',
  templateUrl: './headertwo.component.html',
  styleUrls: ['./headertwo.component.css']
})
export class HeadertwoComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  openDialog() {
    this.dialog.open(AddbuttonComponent,{
      width:'100%'
    });
  }

  ngOnInit(): void {
  }

}
