import { Component } from '@angular/core';
import { Artitle } from './article/artitle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  artitles: Artitle[];

  constructor() {
    this.artitles = [
      new Artitle('Angular','Angular.io', 10),
      new Artitle('Facebook','Facebook.com', 4),
      new Artitle('GitHub','Github.com', 5)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    console.log(`El titulo es ${title.value} y el link es ${link.value}`);
    this.artitles.push( new Artitle(title.value, link.value, 0) );
    title.value = '';
    link.value = '';
    return false;
  }

  ordenarArticulos(): Artitle[]{
    console.log('llamo a imprimir');
    return  this.artitles.sort( (a: Artitle, b: Artitle) => b.votes - a.votes );
  }

}
