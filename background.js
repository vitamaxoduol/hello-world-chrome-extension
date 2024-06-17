chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ hello: 'world' }, () => {
      if (chrome.runtime.lastError) {
        console.error("Error setting value: ", chrome.runtime.lastError);
      } else {
        console.log('Value is set to hello: world');
      }
    });
  });

  