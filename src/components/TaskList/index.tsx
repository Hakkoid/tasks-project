import { Component,  } from 'vue-property-decorator'
import { cn } from '@bem-react/classname';
import { useStore } from 'vuex-simple'
import { Store } from '@/store/index'
import Block from '@/components/Block'
import Input from '@/components/Input'
import { InputEvent } from '@/types'
import { VueComponent } from '@/shims-vue'

import './style.scss'

export const bemCls = cn('TaskList')

@Component
export default class TaskList extends VueComponent {
  public store: Store = useStore(this.$store)

  public inputValue: string = ''

  public handleSave(): void {
    if (this.store.selected && this.inputValue) {
      this.store.addTask({ dayId: this.store.selected, msg: this.inputValue })
      this.inputValue = ''
    }
  }

  get tasks () {
    const day = this.store.selectedDay

    if (day) {
      return day.tasks.map(({id, msg}) => (
        <li key={id} class={bemCls('Item')}>{msg}</li>
      ))
    }

    return []
  }

  render() {
    return (
      <Block class={bemCls()}>
        <template slot='title'>События</template>
        <div class={bemCls('Content')}>
          <Input placeholder='Текст' vModel={this.inputValue} onEnter={this.handleSave} />
          <ul class={bemCls('List')}>
            {this.tasks}
          </ul>
        </div>
      </Block>
    )
  }
}
