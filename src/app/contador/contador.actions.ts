import { Action } from '@ngrx/store'

//Actions
export const INCREMENTAR = 'INCREMENTAR'
export const DECREMENTAR = 'DECREMENTAR'
export const MULTIPLICAR = 'MULTIPLICAR'
export const DIVIDIR = 'DIVIDIR'
export const RESET = 'RESET'

//Action  Creators
export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action {
    readonly type = MULTIPLICAR;
    constructor(public payload: number) { }
}

export class DividirAction implements Action {
    readonly type = DIVIDIR;
    constructor(public payload: number) { }
}

export class ResetAction implements Action {
    readonly type = RESET;
}



export type actions = IncrementarAction |
                      DecrementarAction |
                      DividirAction |
                      MultiplicarAction |
                      ResetAction;
