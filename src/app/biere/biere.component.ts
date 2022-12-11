import { Component, Input } from '@angular/core';
import { Biere } from '../biere';

@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.scss']
})
export class BiereComponent {
  @Input() biere: Biere;
}