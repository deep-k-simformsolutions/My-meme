import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeAddComponent } from './meme-add.component';

describe('MemeAddComponent', () => {
  let component: MemeAddComponent;
  let fixture: ComponentFixture<MemeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
