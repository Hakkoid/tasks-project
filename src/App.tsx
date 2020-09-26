import { Component, Vue } from 'vue-property-decorator'
import Calendar from '@/components/Calendar'
import TaskList from '@/components/TaskList'
import { Store } from '@/store/index'
import { useStore } from 'vuex-simple'

import './App.css'

@Component
export default class App extends Vue {
  public store: Store = useStore(this.$store)

  mounted() {
    const date = new Date
    this.store.setMonth(date)
    this.store.setSelected(date.getDate())
  }

  render() {
    return (
      <div id="app">
        <Calendar />
        <TaskList />
      </div>
    )
  }
}
