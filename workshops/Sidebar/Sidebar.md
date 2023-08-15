# Sidebar
The Box Content Sidebar UI Element allows developers to add support for viewing file related metadata (incl. Box Skills) and Activity Feed (incl. versions, comments and tasks) in their desktop or mobile web application.

Full documentation can be found [here](https://developer.box.com/guides/embed/ui-elements/sidebar/).

## Exercises

### Simple Sidebar with some options
In your box account navigate to the `UIE Samples`, and get the file id for `Document (PDF).pdf` file:
![Alt text](/images/preview_file_id.png)
In my case the file id is `1280655635230`.

Create a `sidebar.js` file under the `js` folder of the project and add the following code:
```javascript
var file_id = '1280655635230';

var options = {
    'container': '.sidebar',
    'hasActivityFeed': true,
    'hasMetadata': true,
    'hasSkills': true,
    'detailsSidebarProps': {
        'hasProperties': true,
        'hasAccessStats': true,
        'hasVersions': true,
        'hasNotices': true,	
    }
}

var sidebar = new Box.ContentSidebar();
console.log('Sidebar:', sidebar);

sidebar.show(file_id, accessToken, options);
```
Point your browser to http://localhost:8000, and navigate to the Sidebar. This element has better results with some context rather than just by it self. Check the different icons and options available.

You should see something like this:
![Alt text](/images/sidebar.png)

## Scopes

Below are a set of UI Element-specific scopes to go alongside Downscoping. These allow developers to enable/disable UI controls on the Content Sidebar by configuring the appropriate scopes on the downscoped token. To learn more, see [Dedicated Scopes for Box UI Elements](https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/).

* Base Scope
    * base_sidebar - Allows the user to get basic file info needed for the sidebar.
* Feature Scopes
    * item_comment  - Allows adding and editing comments.
    * item_rename   - Allows editing of file description.
    * item_upload   - Allows editing of file metadata.
    * item_task     - Allows creating and resolving of tasks.
