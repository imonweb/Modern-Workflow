class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll(".feature-item")
    this.hideInitally()
    this.events()
  }

  events(){
    window.addEventListener("scroll", () => {
      console.log("Scroll function ran")
      this.itemsToReveal.forEach(el => {
        this.calculateIfScrolledTo(el)
      })
    })
  }

  calculateIfScrolledTo(el){
    /* console.log(el.getBoundingClientRect().y) */ 
    /* MS Edge i.e. console.log(el.getBoundingClientRect().top) */ 
    let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
    if(scrollPercent < 75){
      el.classList.add("reveal-item--is-visible")
    }
  }

  hideInitally(){
    this.itemsToReveal.forEach( el => el.classList.add("reveal-item"))
  }
}

export default RevealOnScroll;