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
function upQuarkClick() {
  player.clicks.UQ += player.clickValues.UQ;
}
clicks = player.clicks;
document.getElementById("total_up_quark_clicks").innerHTML = clicks.UQ;
