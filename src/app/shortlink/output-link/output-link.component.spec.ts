import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputLinkComponent } from './output-link.component';

describe('OutputLinkComponent', () => {
  let component: OutputLinkComponent;
  let fixture: ComponentFixture<OutputLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
