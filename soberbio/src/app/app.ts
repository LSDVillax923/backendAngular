import { Component} from '@angular/core';
import { Cliente } from "./model/cliente/cliente";
import { Comida } from "./model/comida/comida";
import { Pedido } from "./model/pedido/pedido";
import { Usuario } from "./model/usuario/usuario";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Cliente, Comida, Pedido, Usuario]
})
export class App {
  title = 'mi casa tio';
}
