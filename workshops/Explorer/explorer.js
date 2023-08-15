var rootFolderId = '0';

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

    'contentPreviewProps': optionsPreviewer,
}

var contentExplorer = new Box.ContentExplorer();
console.log('ContentExplorer:', contentExplorer);

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

contentExplorer.show(rootFolderId, accessToken, options);