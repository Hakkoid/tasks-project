import { State, Mutation } from 'vuex-simple'
import { IDayState } from '@/types'
import { getDaysInMonth } from '@/utils'

export class Store {
  @State()
  public days: IDayState[] = []

  private idCounter = 0

  @Mutation()
  public setMonth(date: Date) {
    const daysCount = getDaysInMonth(date);
    
    this.days = []

    for (let i = 1, len = daysCount + 1; i < len; i++) {
      this.days.push({
        id: i,
        tasks: []
      })
    }
  }

  @Mutation()
  public addTask(id: number, msg: string) {
    const day = this.days.find(item => item.id === id)

    if (day) {
      day.tasks.push({
        id: ++this.idCounter,
        done: false,
        msg
      })
    }
  }
}

