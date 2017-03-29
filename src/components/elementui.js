import '../../src/assets/less/element-ui/index.less'

import Message from 'element-ui/lib/message'
import MessageBox from 'element-ui/lib/message-box'
import Notification from 'element-ui/lib/notification'
import Loading from 'element-ui/lib/loading'
import Dialog from 'element-ui/lib/dialog'
import Button from 'element-ui/lib/button'
import ButtonGroup from 'element-ui/lib/button-group'
import Input from 'element-ui/lib/input'
import InputNumber from 'element-ui/lib/input-number'
import Radio from 'element-ui/lib/radio'
import RadioGroup from 'element-ui/lib/radio-group'
import RadioButton from 'element-ui/lib/radio-button'
import Checkbox from 'element-ui/lib/checkbox'
import CheckboxGroup from 'element-ui/lib/checkbox-group'
import Switch from 'element-ui/lib/switch'
import Select from 'element-ui/lib/select'
import Option from 'element-ui/lib/option'
import OptionGroup from 'element-ui/lib/option-group'
import Form from 'element-ui/lib/form'
import FormItem from 'element-ui/lib/form-item'
import Card from 'element-ui/lib/card'
import Tabs from 'element-ui/lib/tabs'
import TabPane from 'element-ui/lib/tab-pane'
import Table from 'element-ui/lib/table'
import TableColumn from 'element-ui/lib/table-column'
import Carousel from 'element-ui/lib/carousel'
import CarouselItem from 'element-ui/lib/carousel-item'

const components = [
  Dialog,
  Button,
  ButtonGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Form,
  FormItem,
  Card,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Carousel,
  CarouselItem,
]

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component);
  })

  Vue.use(Loading.directive)

  Vue.prototype.$loading = Loading.service
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
};

export default {
  install,
  Message,
  MessageBox,
  Loading,
  Notification,
  Dialog,
  Button,
  ButtonGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Form,
  FormItem,
  Card,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Carousel,
  CarouselItem,
}