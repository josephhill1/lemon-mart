import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CategoriesComponent } from './categories.component'
import { commonTestingModules } from '../../common/common.testing'

describe('CategoriesComponent', () => {
  let component: CategoriesComponent
  let fixture: ComponentFixture<CategoriesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules],
      declarations: [CategoriesComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
