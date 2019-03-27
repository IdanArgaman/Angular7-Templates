import { Component, OnInit, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input()
  headerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}