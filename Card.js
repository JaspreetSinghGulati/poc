/**
 * @file Module to create Card component.
 */

/**
 * Class representing a card.
 */
export class Card {

  /**
   * Setup properties.
   * @param {HTMLElement} element - The DOM element to append the component.
   */
  constructor(element) {
    this.dom = {
      card: element
    };
    this.listeners = {
      selectCard: () => this.selectCard()
    };
  }

  /**
   * Create component.
   * @public
   */
  init() {
    this._addEventListeners();
  }

  /**
   * Destroy component.
   * @public
   */
  destroy() {
    this._removeEventListeners();
  }

  /**
   * Add event listeners.
   * @private
   */
  _addEventListeners() {
    this.dom.card.addEventListener('click', this.listeners.selectCard);
  }

  /**
   * Remove event listeners.
   * @private
   */
  _removeEventListeners() {
    this.dom.card.removeEventListener('click', this.listeners.selectCard);
  }

  /**
   * Toggle selected card.
   * @public
   */
  selectCard() {
    this.dom.card.classList.toggle('selected');
    // TODO Dispatch event with selected card
  }
}
