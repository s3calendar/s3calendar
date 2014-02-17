// Saves options to localStorage.
function save_options() {
  var select = document.getElementById('calendar');
  var calendar = select.value;
  localStorage["calendar_name"]=calendar;
  // Update status to let user know options were saved.
  var status = document.getElementById("feedback");
  status.innerHTML = "Options Saved!!!";
  var bkg = chrome.extension.getBackgroundPage();
  bkg.settings.foo = calendar;
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var favorite = localStorage["calendar_name"];
  if (!favorite) {
    return;
  }
  var input = document.getElementById("calendar");
  input.value = favorite;
  bkg.settings.foo = favorite;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);