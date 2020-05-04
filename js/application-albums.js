// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  //new GameManager(5, 8192, 2, KeyboardInputManager, HTMLActuator, LocalScoreManager);
  new GameManager(6, 32768, 4, KeyboardInputManager, HTMLActuator, LocalStorageManager, "albumsfull");
});
