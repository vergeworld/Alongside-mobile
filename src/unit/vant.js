import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar
} from 'vant'

export default function Plugins(Vue) {
  Vue.use(NavBar)
  Vue.use(Button)
  Vue.use(Tabbar)
  Vue.use(TabbarItem)
}
