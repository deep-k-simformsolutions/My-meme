import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';  
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-meme-add',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, CommonModule],
  templateUrl: './meme-add.component.html',
  styleUrl: './meme-add.component.scss',
  providers: [DataService]
})
export class MemeAddComponent implements OnInit {
  memeForm: UntypedFormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private dataService: DataService, public dialogRef: MatDialogRef<MemeAddComponent>, public snackBar: MatSnackBar) {
    this.memeForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      image: [null],
    });
  }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('data', JSON.stringify({
      name: this.memeForm.get('name')?.value,
      Description: this.memeForm.get('description')?.value,
    }));

    if (this.selectedFile) {
      formData.append('files.image', this.selectedFile);
    }
    this.dataService.addMeme(formData).subscribe((response) => {
      this.snackBar.open('Meme uploaded successfully', '', {
        duration: 5000,
        panelClass: "msg-danger",
      });
      this.dialogRef.close(true);
    }, (error) => {
      console.error('Error uploading meme', error);
    })
  }

}