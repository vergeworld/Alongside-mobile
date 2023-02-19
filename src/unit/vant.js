import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Icon,
  Tab,
  Tabs,
  Area
} from 'vant'

export default function Plugins(Vue) {
  Vue.use(NavBar)
  Vue.use(Button)
  Vue.use(Tabbar)
  Vue.use(TabbarItem)
  Vue.use(Icon)
  Vue.use(Tab)
  Vue.use(Tabs)
  Vue.use(Area)
}
