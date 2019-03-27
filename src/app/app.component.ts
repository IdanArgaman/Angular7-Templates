import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('estimateTemplate')
  private estimateTpl: TemplateRef<any>;

  appName = 'Angular Templates!'

  totalEstimate = 10;
  ctx = { estimate: this.totalEstimate };

  ngOnInit() {
    // console.log(this.estimateTpl);
  }
}
