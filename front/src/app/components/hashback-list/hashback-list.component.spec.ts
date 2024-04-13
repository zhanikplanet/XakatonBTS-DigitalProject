import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashbackListComponent } from './hashback-list.component';

describe('HashbackListComponent', () => {
  let component: HashbackListComponent;
  let fixture: ComponentFixture<HashbackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashbackListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HashbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
