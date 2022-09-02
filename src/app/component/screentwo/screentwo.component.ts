import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-screentwo',
  templateUrl: './screentwo.component.html',
  styleUrls: ['./screentwo.component.css']
})
export class ScreentwoComponent implements OnInit {

  @Input() childPost:any []= [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
