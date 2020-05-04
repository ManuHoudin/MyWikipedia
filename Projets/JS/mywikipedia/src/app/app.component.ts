import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDfSPYoqmht63uI6uCe4VIIJy1h-IMOhgA",
      authDomain: "mywikipedia.firebaseapp.com",
      databaseURL: "https://mywikipedia.firebaseio.com",
      projectId: "mywikipedia",
      storageBucket: "mywikipedia.appspot.com",
      messagingSenderId: "503754772906",
      appId: "1:503754772906:web:e0d5fb5083a67746dc5bd3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
