# angularjs-chromeextension-shadowdom-example

This is a simple Chrome Extension demonstrating the use of the
Shadow DOM with AngularJS.

Every minute, the [event
page](https://developer.chrome.com/extensions/event_pages) will
send a message to the [content
script](https://developer.chrome.com/extensions/content_scripts),
which will cause the contents of the shadow root to alternate
between the host page and a "Hello, world!" message.

## Requirements

1. Google Chrome

## Installation

1. Download the contents of this repository
2. Open `chrome://extensions`
3. Enable `developer mode`
4. Click `Load unpacked extension...`
5. Navigate to the folder containing the contents of this repository
6. Click `Open`
