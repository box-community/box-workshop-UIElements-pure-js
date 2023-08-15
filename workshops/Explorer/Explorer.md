# Explorer
The Box Content Explorer UI Element allows developers to embed a folder view of content stored on Box in their desktop or mobile web application. The library fetches information about a specified folder through the Box API and then renders the content in a folder view, similar to the main Box web application. Users can then navigate through the folder hierarchy and perform file operations like rename, delete, and share.

Full documentation can be found [here](https://developer.box.com/guides/embed/ui-elements/explorer/).

## Exercises

### Simple root explorer with default options
Create an `explorer.js` file under the `js` folder of the project and add the following code:
```javascript
var rootFolderId = '0';

var options = {
    'container': '.explorer',
    'currentFolderId': rootFolderId,
    'logoUrl': 'box',

    'defaultView': 'files',
    'sortBy': 'name',
    'sortDirection': 'ASC',

    'canPreview': true,
    'canDownload': true,
    'canDelete': true,
    'canRename': true,
    'canUpload': true,
    'canCreateNewFolder': true,
    'canShare': true,
    'canSetShareAccess': true,
}

var contentExplorer = new Box.ContentExplorer();
console.log('ContentExplorer:', contentExplorer);
contentExplorer.show(rootFolderId, accessToken, options);
```

Point your browser to http://localhost:8000, and navigate to the Explorer. You should see something like this:
![Alt text](/images/explorer_001.png)

If not check your browser console for errors.

The most common error is to forget to add http://localhost:8000 to the allowed origins in the Box Developer Console.

The second most common error is an invalid developer token. These expire after 60 minutes, and need to be refredhed.

### Adding more options to the Explorer
The Explorer UI Element has many options that can be configured.

This is due to its ability to incorporate the other UI Elements, like the Preview, Uploader, etc.

Edit the `explorer.js` file and add the following options:
```javascript
var optionsSidebar = {
    'hasActivityFeed': true,
    'hasMetadata': true,
    'hasSkills': true,
    'hasVersions': true,
    'detailsSidebarProps': {
        'hasProperties': true,
        'hasNotices': true,
        'hasAccessStats': true,
        'hasClassification': true,
        'hasRetentionPolicy': true,
    },
}

var optionsPreviewer = {
    'logoUrl': 'box',
    'contentSidebarProps':optionsSidebar,
}
```
Then add the `optionsPreviewer` to the `options` object:
```javascript
var options = {
    ...

    'contentPreviewProps': optionsPreviewer,
}
```
Now when you preview a file you should see a side bar with more information. Something like this:
![Alt text](/images/explorer_sidebar.png)

### Implementing listeners
The Explorer UI Element allows you to implement listeners for the different events that it fires, so that your app can react to them.

Edit the `explorer.js` file and add the following code ***before the `contentExplorer.show` line***:
```javascript
contentExplorer.addListener('select', explorerSelect)
contentExplorer.addListener('rename', explorerRename)
contentExplorer.addListener('preview', explorerPreview)
contentExplorer.addListener('download', explorerDownload)
contentExplorer.addListener('delete', explorerDelete)
contentExplorer.addListener('upload', explorerUpload)
contentExplorer.addListener('navigate', explorerNavigate)
contentExplorer.addListener('create', explorerCreate)

function explorerSelect(e) {
    console.log('Selected:', e);
    sendEventToServer('select', e);
}

function explorerRename(e) {
    console.log('Renamed:', e);
    sendEventToServer('rename', e);
}

function explorerPreview(e) {
    console.log('Previewed:', e);
    sendEventToServer('preview', e.file);
}

function explorerDownload(e) {
    console.log('Downloaded:', e);
    sendEventToServer('download', e);
}

function explorerDelete(e) {
    console.log('Deleted:', e);
    sendEventToServer('delete', e);
}

function explorerUpload(e) {
    console.log('Uploaded:', e);
    sendEventToServer('upload', e);
}


function explorerNavigate(e) {
    console.log('Navigated:', e);
    sendEventToServer('navigate', e);
}

function explorerCreate(e) {
    console.log('Created:', e);
    sendEventToServer('create', e);
}

function sendEventToServer(eventType, e) {

    var localData = {
        eventType: eventType,
        e: e
    };

    console.log('localData:', localData);

    // $.ajax({
    //     url: "//localhost:8000/event",
    //     type: 'POST',
    //     data: JSON.stringify(localData),
    //     contentType: 'application/json;charset=UTF-8',
    // });
};
```
To see this working open the browser console and as you select, download, etc, you should see the events being logged.

![Alt text](/images/explorer_events.png)

### Extra credit
* Point the Explorer to a different folder.
* Play with the different options and listeners to see what you can do.

## Scopes
Below are a set of UI Element-specific scopes to go alongside Downscoping. These allow developers to enable/disable UI controls on the Content Explorer by configuring the appropriate scopes on the downscoped token. To learn more, see [Dedicated Scopes for Box UI Elements](https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/).

* Base Scope
    * **base_explorer**	Allows access to content in the folder tree based on user/file/token permissions.
* Feature Scopes
    * **item_preview**	Automatically enables preview of the file, upon user click (requires Preview UI Element to be referenced)
    * **item_download**	Allows files/folders contents to be downloaded
    * **item_rename**	Allows files/folders to be renamed
    * **item_share**	Allows sharing of resource specified under "resource" of the downscope request.
    * **item_delete**	Allows file/folders to be deleted