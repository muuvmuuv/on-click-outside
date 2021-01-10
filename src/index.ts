import { isNodeList, isHTMLCollection, isHTMLElement } from './utils'

export type Selector = HTMLElement | HTMLCollection | NodeList
export type Options = {
  removeListener: boolean
}
export type Callback = (state: boolean | null, event: Event) => {}

const defaultOptions: Options = {
  removeListener: true,
}

function vanillaClickOutside(
  selector: Selector,
  callback: Callback,
  options?: Options
): EventListener {
  const theOptions = { ...defaultOptions, ...options }

  const listener = (event: Event) => {
    if (isNodeList(selector) || isHTMLCollection(selector)) {
      if (
        Array.from(<HTMLCollection | NodeList>selector).some((selection) =>
          selection.contains(<Node>event.target)
        )
      ) {
        return callback(false, event)
      }
    } else if (isHTMLElement(selector)) {
      if ((selector as HTMLElement).contains(<Node>event.target)) {
        return callback(false, event)
      }
    } else {
      console.warn('Undefined type of', selector)
      return callback(null, event)
    }

    if (theOptions.removeListener) {
      document.removeEventListener('click', listener)
    }

    return callback(true, event)
  }

  document.addEventListener('click', listener)

  return listener
}

export default vanillaClickOutside
