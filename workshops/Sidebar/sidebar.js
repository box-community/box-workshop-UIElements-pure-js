var accessToken = 'vdkMLmR6BTJCuo0stgp6hbk8p649VXMd';
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