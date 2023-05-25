import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncreaseVolume,
  buttonDecreaseVolume,
  musicForestBtn,
  musicRainBtn,
  musicCoffeeBtn,
  musicCampfireBtn,
} from "./elements.js"

export default function Events({timer, sounds, controls, helper}) {
  buttonPlay.addEventListener("click", controllPlay)
  buttonPause.addEventListener("click", controllPause)
  buttonStop.addEventListener("click", controllStop)
  buttonIncreaseVolume.addEventListener("click", controllIncreaseVolume)
  buttonDecreaseVolume.addEventListener("click", controllDecreaseVolume)

  musicForestBtn.addEventListener("click", controllForestBtn)
  musicRainBtn.addEventListener("click", controllRainBtn)
  musicCoffeeBtn.addEventListener("click", controllCoffeeBtn)
  musicCampfireBtn.addEventListener("click", controllCampfireBtn)
  
  function controllPlay() {
    timer.countDown()
    controls.play()
  }
  
  function controllPause() {
    timer.hold()
    controls.pause()
  }
  
  function controllStop() {
    timer.reset()
    controls.stop()
  }
  
  function controllIncreaseVolume() {
    let newMinutes = controls.increaseVolume()
    timer.updateDisplay(newMinutes);
  }
  
  function controllDecreaseVolume() {
    let newMinutes = controls.decreaseVolume()
    timer.updateDisplay(newMinutes);
  }

  function controllForestBtn(btn) {
    let button = btn.currentTarget
    helper.resetBackground()
    helper.musicButtonPress(button)
    sounds.playMusicForest(button)
  }

  function controllRainBtn(btn) {
    let button = btn.currentTarget
    helper.resetBackground()
    helper.musicButtonPress(button)
    sounds.playMusicRain(button)
  }

  function controllCoffeeBtn(btn) {
    let button = btn.currentTarget
    helper.resetBackground()
    helper.musicButtonPress(button)
    sounds.playMusicCoffee(button)
  }

  function controllCampfireBtn(btn) {
    let button = btn.currentTarget
    helper.resetBackground()
    helper.musicButtonPress(button)
    sounds.playMusicCampfire(button)
  }

  return {
    controllPlay,
    controllPause,
    controllStop,
    controllIncreaseVolume,
    controllDecreaseVolume,
    controllForestBtn,
    controllRainBtn,
    controllCoffeeBtn,
    controllCampfireBtn,
  }
}
