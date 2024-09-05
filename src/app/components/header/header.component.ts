import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { MemeAddComponent } from '../meme-add/meme-add.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {

  }
  onClick() {
    const dailogRef = this.dialog.open(MemeAddComponent, {
      width: "500px",
      data: { title: 'report', heading: 'Delete Report' }
  });
  }
}
