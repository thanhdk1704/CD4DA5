import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private renderer:Renderer2) { }
  
  ngOnInit(): void {
  }
  public loadScripts() {
    this.renderExternalScript('assets/js/main.js').onload = () => {
    }
    this.renderExternalScript('assets/js/map.js').onload = () => {
    }
    this.renderExternalScript('assets/js/plugins.js').onload = () => {
    }
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }

}
