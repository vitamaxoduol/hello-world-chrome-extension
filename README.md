# Hello World Chrome Extension

This is a simple Chrome extension that stores a value using the `chrome.storage` API and displays it in a popup. The extension sets a key-value pair (`{ hello: 'world' }`) in the local storage when installed and allows the user to view this stored value via a popup interface.

## Files

- `manifest.json`: Configuration file for the Chrome extension.
- `background.js`: Script to initialize storage when the extension is installed.
- `popup.html`: HTML file for the extension's popup UI.
- `popup.js`: JavaScript file for handling UI interactions in the popup.
- `fetch_leveldb.py`: Python script to fetch and display stored values from the Chrome LevelDB database.

## Installation

### Prerequisites

- Google Chrome browser

### Steps

1. Clone the repository:

    ```sh
    git clone https://github.com/vitamaxoduol/hello-world-chrome-extension.git
    cd hello-world-chrome-extension
    ```

2. Open Chrome and go to `chrome://extensions/`.

3. Enable "Developer mode" by toggling the switch in the top right corner.

4. Click "Load unpacked" and select the directory where you cloned the repository.

5. The extension should now be loaded and the icon should appear in the Chrome toolbar.

## Usage

1. Click the extension icon in the Chrome toolbar to open the popup.
2. Click the "Show Stored Value" button in the popup.
3. The stored value `{ hello: 'world' }` should be displayed. If there's an error, an error message will be shown instead.

## How It Works

- **Storage Initialization:** When the extension is installed, the `background.js` script sets the value `{ hello: 'world' }` in the `chrome.storage.local`.
- **Popup Interface:** The `popup.html` file defines the UI of the popup that appears when you click the extension icon.
- **UI Interaction:** The `popup.js` script handles the click event of the "Show Stored Value" button, retrieves the stored value from `chrome.storage.local`, and updates the UI with the retrieved value.

## Fetching Stored Values from LevelDB

The `fetch_leveldb.py` script is provided to fetch and display all stored values from the LevelDB database that Chrome uses to store extension data.

### Prerequisites

- Python 3.x
- `plyvel` library (can be installed using `pip install plyvel`)

### Running the Script

1. Ensure Chrome is closed to avoid conflicts with the LevelDB lock.
2. Run the script:

    ```sh
    python fetch_leveldb.py
    ```

### Script Overview

- **get_chrome_storage_path():** Determines the path to the Chrome LevelDB storage based on the operating system.
- **fetch_values_from_leveldb(path):** Opens the LevelDB database, iterates through all stored key-value pairs, and decodes them.
- **main():** The main function that sets the path, checks if it exists, and fetches the values.

## Development

### Running Locally

1. Make any necessary changes to the code.
2. Reload the extension in Chrome by going to `chrome://extensions/`, finding your extension, and clicking the reload button (circular arrow).

### Debugging

- Use the Chrome Developer Tools to debug the popup and background scripts:
  - Right-click on the extension icon and select "Inspect popup" to debug the popup.
  - Go to `chrome://extensions/`, find your extension, and click "background page" to debug the background script.

## Contributing

Feel free to fork this repository and submit pull requests. If you find any issues or have suggestions for improvements, please open an issue on the repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.