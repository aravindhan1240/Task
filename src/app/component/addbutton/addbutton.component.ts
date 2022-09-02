import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.css']
})
export class AddbuttonComponent implements OnInit {
  post ='';
  email ="";
  parentPost:any[]=[];

  constructor() { }
  
  ngOnInit(): void {
 
}

AddPost(post:any){
  console.log(post);
  this.parentPost.push(post);

}
}
