import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const debugEl = fixture.debugElement.query(By.css('.vote-count'));
    const nativeEl: HTMLElement = debugEl.nativeElement; // NativeEl needed to get innerHtml or innerText

    expect(nativeEl.innerText).toContain('21');
  });

  it('should highlight the upvote button if i have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const debugEl = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(debugEl.classes['highlighted']).toBeTruthy();
  });
});
