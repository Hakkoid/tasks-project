import { Component, Vue } from 'vue-property-decorator'

import './style.scss'

@Component
export default class Block extends Vue {
  render() {
    return (
      <div class='Block'>
        <h2 class='Block-Title'>
          {this.$slots.title}
        </h2>
        <div class='Block-Content'>
          {this.$slots.default}
        </div>
      </div>
    )
  }
}
