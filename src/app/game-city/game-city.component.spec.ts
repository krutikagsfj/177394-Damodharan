//  Developer:DAMODHARAN S
// Created Date:6/5/2019
// Modified Date:NIL
// Compoent Name:game-city.component.spec .ts
 



import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameCityComponent } from './game-city.component';
describe('GameCityComponent', () => {
  let component: GameCityComponent;
  let fixture: ComponentFixture<GameCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
