import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  
  @Input() childPost:any []= [];
  parentPost:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  AddPost(post:any){
    console.log(post);
    this.parentPost.push(post);
  
  }
}
