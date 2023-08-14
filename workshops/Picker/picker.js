var folder_id = '0';
var accessToken = 'XNLwjP2toL5ViFX2er1om0bkpHCSVgE7';

options = {
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

    // 'extensions':['pdf','docx','xlsx']
    // 'modal': modal

}

var contentPicker = new Box.ContentPicker();
console.log('Content Picker:', contentPicker);

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

contentPicker.show(folder_id, accessToken, options);