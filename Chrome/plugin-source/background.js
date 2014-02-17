  settings = {
    get foo() {
      return localStorage['foo'];
    },
    set foo(val) {
	  
      localStorage['foo'] = val;
    }
  };
  
  chrome.runtime.onMessage.addListener(

  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "calendar")
      sendResponse({farewell: settings.foo});
  });
