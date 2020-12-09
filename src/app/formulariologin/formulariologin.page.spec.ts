import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormulariologinPage } from './formulariologin.page';

describe('FormulariologinPage', () => {
  let component: FormulariologinPage;
  let fixture: ComponentFixture<FormulariologinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariologinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormulariologinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
