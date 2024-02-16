var timer;
var curtimer;
var ii = 0;

$.expr[":"].contains = $.expr.createPseudo(function (arg) {
  return function (elem) {
    if (!$(elem).is(".card")) {
      return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    } else {
      ret = false;
      var arr = arg.split("+");
      for (i in arr) {
        var text = $(elem).find(".srname").text() + " ";
        text += $(elem).find(".srclass").text() + " ";
        text += $(elem).find(".srtype").text() + " ";
        ret = ret || text.toUpperCase().indexOf(arr[i].toUpperCase()) >= 0;
      }

      return ret;
    }
  };
});

function searchSpell(e) {
  var charCode = false;
  if (e) {
    charCode = typeof e.which === "number" ? e.which : e.keyCode;
  }

  if (charCode == 13 || !e) {
    $(".card, .page").show();
    $(".nomobile").hide();

    $(".card")
      .not(".card:contains('" + $("#searchSpell").val() + "')")
      .hide();
    $(".page .card:visible").closest(".page").addClass("vis");
    $(".page").not(".vis").hide();
    $(".page.vis").removeClass("vis");

    if (!$("#searchSpell").val()) {
      $(".page, .card").show();
    }
  }
}

$(document).ready(function () {
  $("#cancel").click(function () {
    $(".card.select").removeClass("select");
    $("body").removeClass("editing");
  });

  $("#getUrl").click(function () {
    /*  url = location.href+'?select=';
         $('.card.select').each(function(){
             url+= this.id+',';
         });
         
         window.open(url);*/
  });

  /*$(".card").click(function () {
    $("body").addClass("editing");
    $(this).toggleClass("select");

    if (!$(".select").length) {
      $(".card.select").removeClass("select");
      $("body").removeClass("editing");
      return false;
    }

    var prefix = "?";
    url = location.href;
    if (url.indexOf("?") > 0) {
      prefix = "&";
    }
    url += prefix + "cards=";

    $(".card.select").each(function () {
      url += this.id + ",";
    });

    if (location.href.indexOf("spellbook") > 0) {
      url += "&spellbook";
    }
    $("#getUrl").attr("href", url);
  });*/

  $(".minus").click(function () {
    val = $("#paddingLeft").val() * 1;
    val -= 0.01;
    val = val.toFixed(2);
    setPadding(val);
  });

  $(".plus").click(function () {
    val = $("#paddingLeft").val() * 1;
    val = val + 0.01;
    val = val.toFixed(2);
    setPadding(val);
  });

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
});

setPadding = function (val) {
  $("#paddingLeft").val(val);
  $(".page")
    .not(".mirrorpage")
    .css("padding-left", val + "cm");
  setCookie("paddingLeft", val, 99999);
};

setCustomBack = function (val) {
  if (val) {
    re = /(https?:\/\/.*\.(?:png|jpg))/i;
    url = val.match(re);
    val = url[0];
  }
  setCookie("back", val, 99999);
};

toggleSpellbook = function () {
  var url = location.href;
  var prefix = "?";
  url = url.replace(/#/g, "");
  if (url.indexOf("spellbook") > 0) {
    if (url.indexOf("&") > 0) {
      prefix = "&";
    }
    url = url.replace("?joesterMode", "").replace("&joesterMode", "");
    url = url.replace("?4a4", "").replace("&4a4", "");
    url2 = url.replace(prefix + "spellbook", "");
    url2 = url2.replace("/&", "/?");
    url2 = url2.replace("?scrolls&spellbook", "?scrolls");
  } else {
    if (url.indexOf("?") > 0) {
      prefix = "&";
    }
    url2 = location.href.replace("?joesterMode", "").replace("&joesterMode", "").replace("?4a4", "").replace("&4a4", "") + prefix + "spellbook";
    url2 = url2.replace("/&", "/?");
    url2 = url2.replace("?scrolls&spellbook", "?scrolls");
  }
  location.href = url2;
};

setOld = function () {
  var url = location.href;
  var prefix = "?";
  url = url.replace(/#/g, "");
  if (url.indexOf("?") > 0) {
    prefix = "&";
  }
  location.href = location.href + prefix + "old";
};

toggleJoester = function () {
  var url = location.href;
  var prefix = "?";
  url = url.replace(/#/g, "");
  if (url.indexOf("joesterMode") > 0) {
    if (url.indexOf("&") > 0) {
      prefix = "&";
    }
    url = url.replace("?spellbook", "").replace("&spellbook", "").replace("?4a4", "").replace("&4a4", "");
    url2 = url.replace(prefix + "joesterMode", "");
    url2 = url2.replace("/&", "/?");
    location.href = url2;
  } else {
    if (url.indexOf("?") > 0) {
      prefix = "&";
    }
    url2 = location.href.replace("?spellbook", "").replace("&spellbook", "").replace("?4a4", "").replace("&4a4", "") + prefix + "joesterMode";
    url2 = url2.replace("/&", "/?");
    location.href = url2;
  }
};

toggle4a4 = function () {
  var url = location.href;
  var prefix = "?";
  url = url.replace(/#/g, "");
  if (url.indexOf("4a4") > 0) {
    if (url.indexOf("&") > 0) {
      prefix = "&";
    }
    url = url.replace("?spellbook", "").replace("&spellbook", "").replace("?joesterMode", "").replace("&joesterMode", "");
    url2 = url.replace(prefix + "4a4", "");
    url2 = url2.replace("/&", "/?");
    location.href = url2;
  } else {
    if (url.indexOf("?") > 0) {
      prefix = "&";
    }
    url2 = location.href.replace("?spellbook", "").replace("&spellbook", "").replace("?joesterMode", "").replace("&joesterMode", "") + prefix + "4a4";
    url2 = url2.replace("/&", "/?");
    location.href = url2;
  }
};

flip = function () {
  $("body").toggleClass("mirror");
  $(".cardBlock").toggleClass("flipped");
};

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

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
