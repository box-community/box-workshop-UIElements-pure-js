# Uploader
The Box Content Uploader UI Element allows developers to embed an upload widget in their desktop or mobile web application. Users can select files or use drag and drop to upload.

Full documentation can be found [here](https://developer.box.com/guides/embed/ui-elements/Uploader/).

## Exercises

### Simple Uploader with some options
Create a `uploader.js` file under the `js` folder of the project and add the following code:
    
```javascript
var folder_id = 'UIE SAMPLES FOLDER ID';

var options = {
    'container': '.uploader',
    'fileLimit': 100,
}

var contentUploader = new Box.ContentUploader();

console.log('Content Uploader:', contentUploader);

contentUploader.show(folder_id, accessToken, options);
```
Point your browser to http://localhost:8000, and navigate to the Uploader. You should see something like this:
![Alt text](/images/uploader.png)
Go ahead and upload some files.
You should find them under the UIE Samples folder in your Box account.

### Implementing listeners
The Uploader UI Element allows you to implement listeners for the different events that it fires.

Edit the `uploader.js` file and add the following code ***before the `contentUploader.show` line***:
```javascript
contentUploader.addListener('close', uploaderClose);
contentUploader.addListener('complete', uploaderComplete);
contentUploader.addListener('upload', uploaderUpload);
contentUploader.addListener('error', uploaderError);

function uploaderClose(e) {
    console.log('close:', e);
    sendEventToServer('close', e);
}

function uploaderComplete(e) {
    console.log('complete:', e);
    sendEventToServer('complete', e);
}

function uploaderUpload(e) {
    console.log('upload:', e);
    sendEventToServer('upload', e);
}

function uploaderError(e) {
    console.log('error:', e);
    sendEventToServer('error', e);
}

function sendEventToServer(eventType, e) {

    var localData = {
        eventType: eventType,
        e: e
    };

    // $.ajax({
    //     url: "//localhost:8000/events",
    //     type: 'POST',
    //     data: JSON.stringify(localData),
    //     contentType: 'application/json;charset=UTF-8',
    // });
};
```
To see this working open the browser console and as you upload content, you'll see the list of your uploads.
![Alt text](/images/uploader_events.png)

### Extra credit
* See if you can implement the modal mode.

## Scopes
Below are a set of UI Element-specific scopes to go alongside Downscoping. These allow developers to enable/disable UI controls on the Content Explorer by configuring the appropriate scopes on the downscoped token. To learn more, see [Dedicated Scopes for Box UI Elements](https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/).


* Base Scope
    * **base_upload**	Allows upload into the folder specific under "resource" of the Token Exchange request.
