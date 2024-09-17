import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, OurMenuComponent, HowToOrderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
