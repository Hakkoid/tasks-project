import { Component, Prop } from 'vue-property-decorator'
import Block from '@/components/Block'
import { IDayState } from '@/types'
import { VueComponent } from '@/shims-vue'

import './style.scss'

const WEEK_DAYS = [
    'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
];

interface IProps {
  days: IDayState[];
}

@Component
export default class Calendar extends VueComponent<IProps> {
  @Prop()
  private days!: IDayState[];

  get weekDays () {
    return WEEK_DAYS.map(day => <span class='Calendar-WeekDay' key={day}>{day}</span>)
  }

  get computedDays () {
    return this.$props.days.map(day => <span class='Calendar-Day' key={day.id}>{day.id}</span>)
  }

  render() {
    return (
      <Block class='Calendar'>
        <template slot='title'>Декабрь 2019</template>
        <div class='Calendar-Content'>
          {this.weekDays}
          {this.computedDays}
        </div>
      </Block>
    )
  }
}
