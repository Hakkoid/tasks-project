import { Component, Prop } from 'vue-property-decorator'
import { useStore } from 'vuex-simple'
import { Store } from '@/store/index'
import { VueComponent } from '@/shims-vue'
import { InputEvent } from '@/types'

import { bemCls } from '.'
import './style.scss'

interface IProps {
  id: number;
  msg: string;
  done: boolean;
}

@Component
export default class Item extends VueComponent<IProps> {
  public store: Store = useStore(this.$store)

  @Prop(Number) readonly id!: number
  @Prop(String) readonly msg!: string
  @Prop(Boolean) readonly done!: boolean

  public handleChange(event: InputEvent): void {
    if (this.store.selected) {
      this.store.updateTask({
        dayId: this.store.selected,
        taskId: this.$props.id,
        done: event.target.checked
      })
    }
  }

  render() {
    const { done, msg } = this.$props
    console.log(done)
    return (
      <li class={bemCls('Item', { done: done })}><input type="checkbox" onChange={this.handleChange} checked={done} /> {msg}</li>
    )
  }
}
