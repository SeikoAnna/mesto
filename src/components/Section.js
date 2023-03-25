//Перебор массива и отрисовка разметки на его основе
//Класс Section будет решать отдельную задачу — вставку элементов в разметку.

export default class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  renderItems(items) {
    items.reverse().forEach((item) => this._renderer(item));
  }


  addItem(element) {
    this._container.prepend(element);
  }
}
