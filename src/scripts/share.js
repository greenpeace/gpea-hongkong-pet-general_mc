export { mainShare, whatsAppShare };

const mainShare = (event) => {
  event.preventDefault();
  //
  const fbShare = () => {
    var baseURL = "https://www.facebook.com/sharer/sharer.php";
    var u = "https://act.gp/31PkLWv";
    var t = (window.innerHeight - 436) / 2;
    var l = (window.innerWidth - 626) / 2;
    window.open(
      baseURL + "?u=" + encodeURIComponent(u),
      "_blank",
      "width=626,height=436,top=" + t + ",left=" + l
    );
  };
  // WEB SHARE API
  if (navigator.share) {
    navigator
      .share({
        title: "",
        text:
          "您可以阻止亞馬遜毀林！一齊聯署促請香港企業查明、公開所售肉品來源，同毀林肉商劃清界線，確保我哋喺店鋪購買嘅肉品，唔涉及亞馬遜毀林，一齊行動保衛亞馬遜森林👉 ",
        url: "https://act.gp/3lGitko",
      })
      .then()
      .catch();
  } else {
    fbShare();
  }
};

const whatsAppShare = (event) => {
  event.preventDefault();
  var w =
    "https://api.whatsapp.com/send?text=您可以阻止亞馬遜毀林！一齊聯署促請香港企業查明、公開所售肉品來源，同毀林肉商劃清界線，確保我哋喺店鋪購買嘅肉品，唔涉及亞馬遜毀林，一齊行動保衛亞馬遜森林👉 https://act.gp/2DjK759";
  window.open(w);
};
