function gameLoop(player) {
  clicks = player.clicks;
  autos = player.autoClicks;
  update_clicks(player);
};
function update_clicks(player) {
  clicks = player.clicks;
  
}
gameLoop(player);
var eUpQuark = document.getElementById("total_up_quark_clicks");
eUpQuark.innerHTML = clicks.UQ;
