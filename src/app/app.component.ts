import { Component } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app',
  template: `
    <div *ngFor="let p of posts; let i=index">
      <span>{{ i + 1 }} - {{ p.title?.rendered }}</span>
    </div>
  `
})
export class AppComponent {
  public posts: any;
  constructor(private wpApiPosts: WpApiPosts) {
    this.wpApiPosts.getList()
      .map(resp => resp.json())
      .subscribe(p => this.posts = p);
  }
}
