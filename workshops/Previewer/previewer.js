var file_id = '1280655635230';

var file_list = [
    '1280655635230',
    '1280653959899',
    '1280647367073',
    '1280645692624'
]

var options = {
    "container": ".previewer",
    "header": "light",
    "logoUrl": "box",
    "hasHeader": true,
    "showDownload": true,

    "collection": file_list,
}

var contentPreviewer = new Box.Preview();

contentPreviewer.addListener('viewer', previewerViewer);
contentPreviewer.addListener('load', previewerLoad);
contentPreviewer.addListener('navigate', previewerNavigate);
contentPreviewer.addListener('notification', previewerNotification);
contentPreviewer.addListener('viewerevent', previewerViewerEvent);

console.log('Content Previewer:', contentPreviewer);

function previewerViewer(viewer) {
    console.log('viewer object:', viewer);
}

function previewerLoad(e) {
    console.log('load:', e);
    sendEventToServer('load', e.file);
}

function previewerNavigate(e) {
    console.log('navigate:', e);
    sendEventToServer('navigate', e);
}

function previewerNotification(e) {
    console.log('notification:', e);
    sendEventToServer('notification', e);
}

function previewerViewerEvent(e) {
    console.log('viewer event:', e);
    sendEventToServer('viewerevent', e);
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

contentPreviewer.show(file_id, accessToken, options);