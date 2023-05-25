import {
  musicForestBtn,
  musicRainBtn,
  musicCoffeeBtn,
  musicCampfireBtn,
} from "./elements.js"

export default function Helper() {
  function musicButtonPress(btn) {
    const buttons = [
      musicForestBtn,
      musicRainBtn,
      musicCoffeeBtn,
      musicCampfireBtn,
    ]  
  
    for (let i = 0; i <= buttons.length; i++) {
      switch (btn) {
        case buttons[0]:
          btn.classList.remove("bg-button")
          btn.classList.add("forest")
          break
        case buttons[1]:
          btn.classList.remove("bg-button")
          btn.classList.add("rain")
          break
        case buttons[2]:
          btn.classList.remove("bg-button")
          btn.classList.add("coffee")
          break
        case buttons[3]:
          btn.classList.remove("bg-button")
          btn.classList.add("campfire")
          break
      }
    }
  }
  
  function resetBackground() {
    musicForestBtn.classList.remove("forest")
    musicRainBtn.classList.remove("rain")
    musicCoffeeBtn.classList.remove("coffee")
    musicCampfireBtn.classList.remove("campfire")  
  
    musicForestBtn.classList.add("bg-button")
    musicRainBtn.classList.add("bg-button")
    musicCoffeeBtn.classList.add("bg-button")
    musicCampfireBtn.classList.add("bg-button")  
  }
  
  return {musicButtonPress, resetBackground}
}