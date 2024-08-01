var timer;
var curtimer;
var ii = 0;

function setup() {
  function restoreIcon(iconPos) {
    const icon = getCookie("ci-" + iconPos);
    if (!icon) {
      return;
    }
    $(".card .body .line ." + iconPos)
      .removeClass()
      .addClass(icon)
      .addClass(iconPos)
      .text("");

    $("#" + iconPos)
      .removeClass()
      .addClass(icon)
      .addClass("icon")
      .text("")
      .attr("title", icon.replace("rpg-Icon", ""));
  }

  restoreIcon("icon-top");
  restoreIcon("icon");
  restoreIcon("icon-bot");
}

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = getClassName() + "-" + name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

function getCookie(name) {
  var matches = document.cookie.match(
    new RegExp("(?:^|; )" + getClassName() + "-" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
