import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvionPage } from './avion.page';

describe('AvionPage', () => {
  let component: AvionPage;
  let fixture: ComponentFixture<AvionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvionPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
