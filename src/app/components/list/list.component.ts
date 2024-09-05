import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Meme } from '../../utis/interface';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { MemeAddComponent } from '../meme-add/meme-add.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ MatCardModule, HttpClientModule, CommonModule, MatButtonModule, MatSnackBarModule,MatToolbarModule, MatIconModule, MatDialogModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [DataService]
})
export class ListComponent implements OnInit {
  meme$: Observable<Meme[]>
  constructor(private dataService: DataService,public snackBar: MatSnackBar, public dialog: MatDialog){
  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.meme$ = this.dataService.getMemes();
  }
  onDelete(id: number){
    this.dataService.deleteMeme(id).subscribe((response) => {
      this.meme$ = this.dataService.getMemes();
      this.snackBar.open('meme deleted successfully', '', {
        duration: 5000,
        panelClass: "msg-danger",
      });
    });
  }

  onClick() {
    const dailogRef = this.dialog.open(MemeAddComponent, {
      width: "500px",
    });
    dailogRef.afterClosed().subscribe((response)=>{
      if(response) {
        this.getData();
      }
    })
  }

}
