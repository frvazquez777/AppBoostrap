import { Component } from "@angular/core"

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
export class HomeComponent {
    private titulo: string;

    constructor() {
        this.titulo = "Ejemplo Bootstrap"
    }
}
