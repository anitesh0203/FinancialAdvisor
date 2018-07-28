import { Component } from '@angular/core';
import { ServiceLayerService } from './services/service-layer.service';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public serviceLayerService: ServiceLayerService) {}
  title = 'app';

  processClick() {
    this.serviceLayerService.getData();
  }
}
