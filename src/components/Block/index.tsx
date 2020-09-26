import { Component, Vue } from 'vue-property-decorator'
import { cn } from '@bem-react/classname'

import './style.scss'

const bemCls = cn('Block')

@Component
export default class Block extends Vue {
  render() {
    return (
      <div class={bemCls()}>
        <h2 class={bemCls('Title')}>
          {this.$slots.title}
        </h2>
        <div class={bemCls('Content')}>
          {this.$slots.default}
        </div>
      </div>
    )
  }
}
