var player = {
  clicks: {
    UQ: 0,
    DQ: 0,
    electron: 0,
    proton: 0,
    neutron: 0
  },
  autoClicks: {
    
  },
  clickValues: {
    UQ: 1,
  }
};
function gameLoop(player) {
  clicks = player.clicks;
  autos = player.autoClicks;
  update_clicks();
};
function upQuarkClick() {
  player.clicks.UQ += player.clickValues.UQ;
}
gameLoop(player);