import { Component} from '@angular/core';
import { Menu } from "./comida/menu/menu";


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Menu],
})
export class App {
  title = 'mi casa tio';
}




