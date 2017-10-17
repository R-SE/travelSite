const $ = require('jquery');

class MobileMenu {
  constructor(){
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    console.log(this);
  }
  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible")

  }
}



export default MobileMenu;

/*
1. DOM Element Selection
2. Event Handling
3. Functionality
*/
