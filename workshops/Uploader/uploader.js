var folder_id = '221723756896';

var options = {
    'container': '.uploader',
    'fileLimit': 100,

    // 'modal': modal,
}

var contentUploader = new Box.ContentUploader();

console.log('Content Uploader:', contentUploader);

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

contentUploader.show(folder_id, accessToken, options);