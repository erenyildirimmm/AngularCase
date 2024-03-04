import { Component, ElementRef, ViewChild, inject } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
})
export class HomeComponent {
  dataService = inject(DataService);
  mouseTrackerStyle: any = {};
  data: any[] = []
  isMouseOver: boolean = false;
  pushAmount = 12.5;

  // we select the element from the html and define it using a ref
  @ViewChild('mouseTracker') mouseTracker: ElementRef | undefined;
  @ViewChild('card') card: ElementRef | undefined;


  // this step of the lifecycle happens when the page is opened
  // I am making a get call to my json file using the getData method I created in my dataService file
  ngOnInit() {
    this.dataService.getData().subscribe((result) => {
      this.data = result;
    });
  }

  // mousemove runs when the event occurs
  // I store the area of the main card in a variable, then we try to average the background with the cursor by subtracting the left and top areas of our card from the current position of the cursor, for the exact average 
  // I had to add another size/2 to the mouseTracker element
  //for mouseTracker element  mouseTrackerStyle Defining
  trackMouse(event: MouseEvent) {
    let area = this.card?.nativeElement.getBoundingClientRect();
    this.mouseTrackerStyle = {
      left: `${event.clientX - (area.left + 600)}px`,
      top: `${event.clientY - (area.top + 600)}px`,
    };
    this.isMouseOver = true;
  }

  // mouseleave runs when the event occurs
  resetMouseTracking() {
    this.mouseTrackerStyle = {};
    this.isMouseOver = false;
  }
}