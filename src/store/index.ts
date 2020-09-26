import { State, Mutation, Getter } from 'vuex-simple'
import { IDayState } from '@/types'
import { getDaysInMonth } from '@/utils'


// Я не стал выносить логику для событий в отдельный модуль
export class Store {
  private idCounter = 0

  constructor(date: Date) {
    this.date = date;
    this.setMonth(date)
    this.setSelected(date.getDate())
  }

  @State()
  public days: IDayState[] = []

  @State()
  public date: Date | null = null

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

    this.date = date;
  
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
      // Возможно тут не стоило пересоздавать массив, я еще не до конца разобрался в Vuex
      day.tasks = [
        ...day.tasks,
        {
          id: ++this.idCounter,
          done: false,
          msg
        }
      ]
    }
  }

  @Mutation()
  public updateTask(payload: { dayId: number, taskId: number, done?: boolean, msg?: string }) {
    const { dayId, taskId, msg, done } = payload

    const day = this.days.find(({ id }) => id === dayId)

    if (day) {
        const index = day.tasks.findIndex(({ id }) => taskId === id)
        if (index >= 0) {
          day.tasks = [
            ...day.tasks.slice(0, index),
            {
              ...day.tasks[index],
              done: typeof done === 'boolean' ? done : day.tasks[index].done,
              msg: typeof msg === 'string' ? msg : day.tasks[index].msg
            },
            ...day.tasks.slice(index + 1),
          ]
        }
    }
  }
}

