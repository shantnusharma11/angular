import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsComponent } from './reviews.component';

describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*
1. Import the required classes and interfaces
 async
 TestBed
 ComponentFixture
from library @angular/core/testing

 2.  import Component required for testing 
 -for which we are writing our tests

 3. describe('here is name of component' for exampple our component is reviewComponent )
 so it is written as
 describe('reviewComponent',()=>{

 })

 4. now write it inside description

 describe('reviewComponent',()=>{

  it('test case #1', ()=>{
   give a name in it what it is doing

  })

 })

 5. We create a fixture for component and template
    -what is a fixture?
      -its a wrapper(class) around the component and the template
      - using fixture - we can get properties of componnnt class and template

6. Beforeeach -> method ->

before running test scripts - we need some ground work
 - setting up component
 - setting up data
 - important services and many more

 7. TestBed - main utility to define our module,component 

*/
