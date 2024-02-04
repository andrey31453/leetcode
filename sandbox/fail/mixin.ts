const Playlist = function (this: { name: string }, name: string) {
  this.name = name
}

const Track = function (this: { name: string }, name: string) {
  this.name = name
}

const name_mixin = {
  get_name(this: { name: string }): void {
    console.log(this.name)
  },
}

const control_mixin = {
  play(this: { name: string }): void {
    console.log('play ', this.name)
  },
}

const extend = (target: { prototype: object }, ...args: object[]) => {
  if (!args.length) return void 0

  args.forEach((arg) => {
    ;(Object.keys(arg) as (keyof typeof arg)[]).forEach((prop) => {
      target.prototype[prop] = arg[prop]
    })
  })
}

extend(Track, name_mixin, control_mixin)
extend(Playlist, name_mixin, control_mixin)

// wtf?!
const track = new (Track as any)('new track')
track.get_name()
track.play()

const playlist = new (Playlist as any)('new playlist')
playlist.get_name()
playlist.play()
