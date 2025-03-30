import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'researchPro';
  private navigationStartTime: number = 0;
  private fpsValues: number[] = []; // Stores FPS values

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.navigationStartTime = performance.now();
        console.log('Navigation started at:', this.navigationStartTime);
        this.logMemoryUsage();
      }

      if (event instanceof NavigationEnd) {
        const navigationTime = performance.now() - this.navigationStartTime;
        console.log(`Navigation completed in ${navigationTime.toFixed(2)} ms`);
        this.logMemoryUsage();
      }
    });

    // Start FPS Logging
    this.logFPS();
  }

  /** Logs JS Heap Memory Usage */
  private logMemoryUsage(): void {
    const memoryInfo = (performance as any).memory;
    if (memoryInfo) {
      console.log('JS Heap Size:', memoryInfo.usedJSHeapSize, 'bytes');
      console.log('Total Heap Size:', memoryInfo.totalJSHeapSize, 'bytes');
      console.log('Heap Limit:', memoryInfo.jsHeapSizeLimit, 'bytes');
    } else {
      console.warn('Memory API not supported in this browser.');
    }
  }

  /** Logs FPS Performance and calculates average after 20 seconds */
  private logFPS(): void {
    if (typeof window === 'undefined') {
      console.warn('FPS tracking is not available in this environment.');
      return;
    }

    let lastTime = performance.now();
    let frameCount = 0;

    const updateFPS = () => {
      const now = performance.now();
      frameCount++;

      if (now - lastTime >= 1000) { // Every second
       // console.log(`FPS: ${frameCount}`);
        this.fpsValues.push(frameCount); // Store FPS value
        frameCount = 0;
        lastTime = now;
      }

      requestAnimationFrame(updateFPS);
    };

    updateFPS();

    // Calculate and log average FPS after 20 seconds
    setTimeout(() => {
      const sum = this.fpsValues.reduce((acc, val) => acc + val, 0);
      const avgFPS = sum / this.fpsValues.length;
   //   console.log(`\nAverage FPS over 20 seconds: ${avgFPS.toFixed(2)}`);
    }, 20000);
  }
}
