document.addEventListener('DOMContentLoaded', function() {
  const helloBtn = document.getElementById('hello-btn');
  const clearBtn = document.getElementById('clear-btn');
  const storedValueDiv = document.getElementById('stored-value');
  const loadingDiv = document.getElementById('loading');

  helloBtn.addEventListener('click', () => {
      loadingDiv.style.display = 'block';
      storedValueDiv.textContent = '';

      chrome.storage.local.get(['hello'], (result) => {
          loadingDiv.style.display = 'none';
          if (chrome.runtime.lastError) {
              storedValueDiv.textContent = `Error: ${chrome.runtime.lastError.message}`;
          } else {
              if (result.hasOwnProperty('hello')) {
                  storedValueDiv.textContent = `Stored value is: ${result.hello}`;
              } else {
                  storedValueDiv.textContent = `Value not found in storage.`;
              }
          }
      });
  });

  clearBtn.addEventListener('click', () => {
      chrome.storage.local.remove('hello', () => {
          storedValueDiv.textContent = 'Stored value cleared.';
      });
  });
});