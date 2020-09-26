import { Component } from 'vue-property-decorator'
import { cn } from '@bem-react/classname'
import { useStore } from 'vuex-simple'
import { Store } from '@/store/index'
import Block from '@/components/Block'
import { VueComponent } from '@/shims-vue'
import { getFirstDayOfMonth } from '@/utils'

import './style.scss'

const WEEK_DAYS = [
    'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
]

const bemCls = cn('Calendar')

@Component
export default class Calendar extends VueComponent {
  public store: Store = useStore(this.$store)

  get weekDays () {
    return WEEK_DAYS.map(day => <span class={bemCls('WeekDay')} key={day}>{day}</span>)
  }

  get computedDays () {
    return this.store.days.map(({ id, tasks }) => {
      let view = tasks.length ? 'planned' : undefined

      if (id === this.store.selected) {
        view = 'selected'
      }

      return (
        <button
          onClick={() => this.store.setSelected(id)}
          class={bemCls('Day', { view })}
          key={id}
        >
          {id}
        </button>
      )
    })
  }

  get formattedDate() {
    const { date } = this.store
    return date && `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`
  }

  get offset() {
    return this.store.date && getFirstDayOfMonth(this.store.date)
  }

  render() {
    return (
      <Block class={bemCls()}>
        <template slot='title'>{this.formattedDate}</template>
        <div class={bemCls('Content')}>
          {this.weekDays}
          <div class={bemCls('Offset')} style={{ 'grid-column-end': this.offset }} />
          {this.computedDays}
        </div>
      </Block>
    )
  }
}
