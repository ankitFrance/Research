import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any[] = [];
  apiKey = '9eadacd80518427992662ee62745f297'; 
  apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=${this.apiKey}`;


  constructor() {}

  async ngOnInit() {
    await this.fetchNews();
  }

  async fetchNews() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      this.news = data.articles;
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

}
