import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  constructor(private testService: TestService) {}

  testVar = 'test';
  // api call -
  books = ['a', 'b'];

  ngOnInit(): void {
    this.books = this.testService.getBooks;
  }
}
