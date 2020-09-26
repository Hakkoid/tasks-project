import { Component, Model } from 'vue-property-decorator'
import { VueComponent } from '@/shims-vue'
import { InputEvent } from '@/types'
import cn from '@/bemCn'

import styles from './style.scss?module'

const bemCls = cn('Input', styles)

interface IProps {
  placeholder?: string;
  value?: string;
  onEnter?: () => void;
  // Не знаю как правильно прописать v-model
  vModel: any;
}

@Component
export default class Input extends VueComponent<IProps> {
  @Model('input', { type: String }) readonly value!: string

  public handleInput = (event: InputEvent) => {
    this.$emit('input', event.target.value)
  }

  public handleEnter = (event: KeyboardEvent) => {
    if (event.keyCode === 13) {
      this.$emit('enter')
    }
  }

  render() {
    return (
      <input
        {...this.$props}
        value={this.$props.value}
        oninput={this.handleInput}
        onkeypress={this.handleEnter} 
        class={bemCls()}
      />
    )
  }
}
