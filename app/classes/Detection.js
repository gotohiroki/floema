class Detection {
  isPhone() {
    if(!this.isPhoneChecked) {
      this.isPhoneChecked = true

      this.isPhoneCheck = document.documentElement.classList.contains('phone')
    }

    return this.isPhoneCheck
  }

  isTablet() {
    if(!this.TabletChecked) {
      this.TabletChecked = true

      this.TabletCheck = document.documentElement.classList.contains('tablet')
    }

    return this.TabletCheck
  }

  isDesctop() {
    if(!this.DesctopChecked) {
      this.DesctopChecked = true

      this.DesctopCheck = document.documentElement.classList.contains('desctop')
    }

    return this.DesctopCheck
  }
}

const DetectionManeger = new Detection()

export default DetectionManeger