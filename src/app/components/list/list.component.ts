import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Meme } from '../../utis/interface';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ MatCardModule, HttpClientModule, CommonModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [DataService]
})
export class ListComponent implements OnInit {
  meme$: Observable<Meme[]>
  constructor(private dataService: DataService,public snackBar: MatSnackBar){
    this.meme$ = this.dataService.getMemes();
  }
  ngOnInit(): void {
    
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

}
