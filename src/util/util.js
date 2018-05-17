
export function toast(str, icon) {
/*  store.dispatch('showToast', true)
  if (icon == 'success') {
    store.dispatch('showSuccess', true)
    store.dispatch('showFail', false)
  } else {
    store.dispatch('showSuccess', false)
    store.dispatch('showFail', true)
  }
  store.dispatch('toastMsg',str);
  setTimeout(() => {
    store.dispatch('showToast', false);
  },1500);*/
}

/**dialog公共方法*/
export function alert(str) {
  /*  store.dispatch('showAlert', true)
   store.dispatch('alertMsg', str)
   setTimeout(() => {
   store.dispatch('showAlert', false);
   },1500);*/
}

export function setCookie(cname, cvalue, exdays){
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

export function  getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
}

export function  clearCookie(name){
  setCookie(name, "", -1);
}

export function showNotification(title,body,imgPath,mp3Path) {
  if (window.Notification) {
    let popNotice = function() {
      if (Notification.permission == "granted") {
        let notification = new Notification(title, {
          body: body,
          icon: imgPath,
          silent:true,
          sound:mp3Path
        });

        notification.onclick = function() {
          notification.close();
        };
      }
    };

    if (Notification.permission == "granted") {
      popNotice();
    } else if (Notification.permission != "denied") {
      Notification.requestPermission((permission)=> {
        popNotice();
      });
    }
  }
}


