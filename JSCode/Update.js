function gameLoop(player) {
  clicks = player.clicks;
  autos = player.autoClicks;
  update_clicks(player);
};
function update_clicks(player) {
  clicks = player.clicks;
  UQ = document.getElementById("total_up_quark_clicks")
  UQ.innerHTML = clicks.UQ;
}
gameLoop(player);
