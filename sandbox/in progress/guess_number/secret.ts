import { i_secret } from './types'

export class Secret implements i_secret {
  public readonly value: number

  constructor() {
    this.value = Math.round(100 * Math.random())
  }
}
