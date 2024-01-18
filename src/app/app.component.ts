import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Desaparecidos';

  constructor(public loadingService: LoadingService) { 
    this.loadScripts();
  }

  loadScripts() {
    const dynamicScripts = [
      "assets/js/jquery/jquery.js",
      "assets/js/jquery/jquery-migrate.min.js",
      "assets/js/jquery/ui/effect.min.js",
      "assets/js/scripts.js",
      "assets/js/combine.min.js",
      "assets/js/page-builder.js",
      "assets/js/bootstrap.min.js"
    ];

    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}