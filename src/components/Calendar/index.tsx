import { Component, Prop } from 'vue-property-decorator'
import { useStore } from 'vuex-simple'
import { Store } from '@/store/index'
import Block from '@/components/Block'
import { VueComponent } from '@/shims-vue'

import './style.scss'

const WEEK_DAYS = [
    'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
];

@Component
export default class Calendar extends VueComponent {
  public store: Store = useStore(this.$store);

  get weekDays () {
    return WEEK_DAYS.map(day => <span class='Calendar-WeekDay' key={day}>{day}</span>)
  }

  get computedDays () {
    return this.store.days.map(day => <span class='Calendar-Day' key={day.id}>{day.id}</span>)
  }

  render() {
    if (!this.store.days.length) {
      this.store.setMonth(new Date)
    }

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
