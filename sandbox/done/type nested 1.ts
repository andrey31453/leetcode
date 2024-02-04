const menu = {
  menu1: {
    menu11: 'menu 11',
    menu12: 'menu 12',
  },
  menu2: {
    menu21: 21,
    menu22: 22,
  },
}

type t_get_menu_item = <T, key_1 extends keyof T, key_2 extends keyof T[key_1]>(
  target: T,
  key_1: key_1,
  key_2: key_2
) => T[key_1][key_2]

const get_menu_item: t_get_menu_item = (target, key_1, key_2) => {
  return target[key_1][key_2]
}

const menu_item_1 = get_menu_item(menu, 'menu1', 'menu11')
const menu_item_2 = get_menu_item(menu, 'menu2', 'menu21')
