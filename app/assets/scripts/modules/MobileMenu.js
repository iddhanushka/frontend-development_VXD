class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon-link")
    this.mobileMenu = document.querySelector(".site-header__mobile-menu-context")
    this.mobileHeader = document.querySelector(".site-header__mobile-header")
    this.mobileMenuCloser = document.querySelector(".site-header__mobile-menu-close")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.openTheMenu())
    this.mobileMenuCloser.addEventListener("click", () => this.closeTheMenu())
  }

  closeTheMenu() {
    this.mobileMenu.classList.remove("site-header__mobile-menu-context--is-visible")
    this.mobileHeader.classList.remove("site-header__mobile-header--hidden")
  }

  openTheMenu() {
    this.mobileMenu.classList.add("site-header__mobile-menu-context--is-visible")
    this.mobileHeader.classList.add("site-header__mobile-header--hidden")
  }
}

export default MobileMenu
