import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Artitle } from './artitle.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() artitle: Artitle;
  contador = 1; 


  constructor() { 
    console.log(this.contador + 1);
  }

  ngOnInit(): void {
  }


  voteup(){
    this.artitle.voteup();
    return false;
  }

  votedown(){
    this.artitle.votedown();
    return false;
  }


}
