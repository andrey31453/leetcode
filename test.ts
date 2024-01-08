class t1 {
  name: string = 'dsnjdhsjkd'

  constructor(props: any) {
    // this.name = props.name
  }
}

enum Positions {
  dir = 'директор',
  man = 'менеджер',
}

class t2 extends t1 {
  surname: Positions

  constructor(props: any) {
    super(props)
    this.surname = props.surname
  }

  log() {
    console.log(this)
  }
}

const t = new t2({ name: 'name', surname: 'surname' })
t.log()
