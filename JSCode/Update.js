function gameLoop(player) {
  clicks = player.clicks;
  autos = player.autoClicks;
  update_clicks(player);
}
function update_clicks(player) {
  clicks = player.clicks;
  document.getElementById("total_up_quark_clicks").innerHTML = clicks.UQ;
  document.getElementById("total_electron_clicks").innerHTML = clicks.electron;
  document.getElementById("total_down_quark_clicks").innerHTML = clicks.DQ;
  document.getElementById("total_protons").innerHTML = clicks.proton;
  document.getElementById("total_neutrons").innerHTML = clicks.neutron;
}
var game = true;
setInterval(function () {
  gameLoop(player);
}, 500);
