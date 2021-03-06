function upQuarkClick() {
  player.clicks.UQ += player.clickValues.UQ;
  update_clicks(player);
}
function electronClick() {
  player.clicks.electron += player.clickValues.electron;
  update_clicks(player);
}
function downQuarkClick() {
  player.clicks.DQ += player.clickValues.DQ;
  update_clicks(player);
}
function protonClick() {
  if (player.clicks.UQ < 2 || player.clicks.DQ < 1) {
    return;
  }
  player.clicks.UQ -= 2;
  player.clicks.DQ--;
  player.clicks.proton++;
  update_clicks(player);
}
function neutronClick() {
  if (player.clicks.UQ < 1 || player.clicks.DQ < 2) {
    return;
  }
  player.clicks.DQ -= 2;
  player.clicks.UQ--;
  player.clicks.neutron++;
  update_clicks(player);
}
