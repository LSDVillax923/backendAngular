import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingIn } from './sign-in';

describe('SingIn', () => {
  let component: SingIn;
  let fixture: ComponentFixture<SingIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingIn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingIn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
