# Picker
The Box Content Picker UI Element allows developers to add support for selecting files and folders from Box in their desktop or mobile web application. The library fetches information about a specified folder through the Box API and renders the content in a folder view. Users can select files or folders and this content information is then passed to another part of the application.

Full documentation can be found [here](https://developer.box.com/guides/embed/ui-elements/Picker/).

## Exercises

### Simple Picker with some options
Create a `picker.js` file under the `js` folder of the project and add the following code:
```javascript
var folder_id = '0';
var accessToken = 'YOUR DEVELOPER ACCESS TOKEN';

var options = {
    'container': '.picker',

    'sortBy': 'name',
    'sortDirection': 'ASC',

    'logoUrl': 'box',
    'defaultView': 'files',

    'chooseButtonLabel': 'Choose',
    'cancleButtonLabel': 'Cancel',

    'maxSelectable': 10,

    'canUpload': true,
    'canShareAccess': true,
    'canCreateNewFolder': true,

}

var contentPicker = new Box.ContentPicker();
console.log('Content Picker:', contentPicker);

contentPicker.show(folder_id, accessToken, options);
```
Point your browser to http://localhost:8000, and navigate to the Picker. You should see something like this:
![Alt text](/images/picker.png)
Notice that the Picker is showing the root folder of the Box account, and the items now have a checkbox to select them.

### Adding more options to the Picker
Let's have the picker allow only the selection of PDF files.
Edit the `picker.js` file and add the following options:
```javascript
var options = {
    ...
    'extensions':['pdf','docx','xlsx']
}
```
Notice that the other file type are now greyed out and cannot be selected:
![Alt text](/images/picker_file_types.png)

### Implementing listeners
The Picker UI Element allows you to implement listeners for the different events that it fires.

Edit the `picker.js` file and add the following code ***before the `contentPicker.show` line***:
```javascript
contentPicker.addListener('choose', pickerChoose);
contentPicker.addListener('cancel', pickerCancel);

function pickerChoose(e) {
    console.log('choose:', e);
    sendEventToServer('choose', e);
}

function pickerCancel(e) {
    console.log('cancel:', e);
    sendEventToServer('cancel', e);
}	

function sendEventToServer(eventType, e) {

    var localData = {
        eventType: eventType,
        e: e
    };

    // $.ajax({
    //     url: "//localhost:8000/event",
    //     type: 'POST',
    //     data: JSON.stringify(localData),
    //     contentType: 'application/json;charset=UTF-8',
    // });
};
```
To see this working open the browser console and as you select content and then press the button, you'll see the list of your selection.
![Alt text](/images/picker_events.png)


### Extra credit
* Have you noticed that the Picker is showing the root folder of the Box account? Can you change the code to only show the UIE Samples folder and below?
* Try to implement the modal mode.

## Scopes
Below are a set of UI Element-specific scopes to go alongside Downscoping. These allow developers to enable/disable UI controls on the Content Explorer by configuring the appropriate scopes on the downscoped token. To learn more, see [Dedicated Scopes for Box UI Elements](https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/).


* Base Scope
    * **base_picker**	Allows access to content in the folder tree based on user/file/token permissions
* Feature Scopes
    * **item_share**	Allows sharing of resource specified under "resource" of the Token Exchange request.
    * **item_upload**	Allows upload in the content picker