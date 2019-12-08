import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  constructor( private store: Store<AppState>) {
    this.store.select('contador').subscribe(state => {
      this.contador = state;
      console.log(state)
    })
  }

  incrementar(){
    const accion = new IncrementarAction;
    this.store.dispatch(accion)
    
  }

  decrementar(){
    const accion = new DecrementarAction
    this.store.dispatch(accion);
    
  }



}
