import { cn, NoStrictEntityMods, ClassNameList } from '@bem-react/classname'
import { IClassNames } from './types'

type ClassNameFormatter = (
  elemNameOrBlockMods?: NoStrictEntityMods | string | null,
  elemModsOrBlockMix?: NoStrictEntityMods | ClassNameList | null,
  elemMix?: ClassNameList
) => string[]

/**
 * Для классов использовал бем и пакет от яндекса https://github.com/bem/bem-react/tree/master/packages/classname.
 * Он написан под реакт, но может использоваться и без него
 *  */ 
export default (block: string, styles: IClassNames) => {
  const bemCls = cn(block)

  const classNameFormatter: ClassNameFormatter = (...args) => {
    const classnames = bemCls(...args).split(' ')

    return classnames.map(key => styles[key])
  }

  return classNameFormatter
}
