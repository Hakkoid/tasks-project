import { Component,  } from 'vue-property-decorator'
import { cn } from '@bem-react/classname';
import { useStore } from 'vuex-simple'
import { Store } from '@/store/index'
import Block from '@/components/Block'
import Input from '@/components/Input'
import { InputEvent } from '@/types'
import { VueComponent } from '@/shims-vue'

import './style.scss'

const bemCls = cn('TaskList')

@Component
export default class TaskList extends VueComponent {
  public store: Store = useStore(this.$store)

  public inputValue: string = ''

  public handleSave(): void {
    if (this.store.selected) {
      this.store.addTask(this.store.selected, this.inputValue)
      this.inputValue = ''
    }
  }

  render() {
    return (
      <Block class={bemCls()}>
        <template slot='title'>События</template>
        <div class={bemCls('Content')}>
          <Input placeholder='Текст' value={this.inputValue} vModel={this.inputValue} onEnter={this.handleSave} />
        </div>
      </Block>
    )
  }
}
