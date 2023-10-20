import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // similar to axios -

@Injectable({
  providedIn: 'root',
})
export class TestService {
  url = 'localhost:8080/api/books';

  constructor(private httpClient: HttpClient) {}
  getBooks() {
    return this.httpClient.get('test...');
  }
}
