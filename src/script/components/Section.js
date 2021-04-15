// отвечает за отрисовку элементов на странице
export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = containerSelector
    this._items = items
    this._renderer = renderer
  }
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item)
    })
  }
  addItem(element) {
    this._container.append(element)
  }
  addItemNew(element) {
    this._container.prepend(element)
  }
}