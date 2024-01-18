import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { AboutComponent } from '../../components/sobre/about.component';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IntroComponent,
    AboutComponent,
    ListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  year = new Date().getFullYear();

  constructor() {
    this.loadScripts();
  }
  
  loadScripts() {
    const dynamicScripts = [
      "assets/js/jquery/ui/effect.min.js",
      "assets/js/scripts.js",
      "assets/js/combine.min.js",
      "assets/js/page-builder.js"
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
