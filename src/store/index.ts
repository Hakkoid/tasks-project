import { State, Mutation, Getter } from 'vuex-simple'
import { IDayState } from '@/types'
import { getDaysInMonth } from '@/utils'

export class Store {
  private idCounter = 0

  @State()
  public days: IDayState[] = []

  @State()
  public selected: number | null = null

  @Getter()
  public get selectedDay(): IDayState | null {
    return  this.days.find(item => this.selected === item.id) || null
  }
  @Mutation()
  public setSelected(id: number | null) {
    this.selected = id
  }

  @Mutation()
  public setMonth(date: Date) {
    const daysCount = getDaysInMonth(date)
    
    this.days = []

    for (let i = 1, len = daysCount + 1; i < len; i++) {
      this.days.push({
        id: i,
        tasks: []
      })
    }
  }

  @Mutation()
  public addTask(payload: { dayId: number, msg: string }) {
    const { dayId, msg } = payload

    const day = this.days.find(({ id }) => id === dayId)

    if (day) {
      day.tasks.push({
        id: ++this.idCounter,
        done: false,
        msg
      })
    }
  }
}

