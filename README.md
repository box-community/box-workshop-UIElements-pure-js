<img src="images/box-dev-logo.png" 
alt= “box-dev-logo” 
style="margin-left:-10px;"
width=40%;>

# Box UI Elements Workshop
Workshop on hot to use the Box UI Elements in a pure HTML Javascript environment


## Box configuration steps

1. Create a [Box free account](https://www.box.com/pricing/individual) if you don't already have one.
2. Complete the registration process for a Box developer account.
3. Making sure you're logged in navigate to the [Box Developer Console](https://app.box.com/developers/console). This will activate your developer account.
4. Create a new Box application. Select Custom App, fill in the form and then click Next.
5. Select User Authentication (OAuth 2.0) and then click Create App.
7. Check all boxes in application scopes.
6. Scroll to allowed origins and add the following URI:
    - http://localhost:8000
8. Click Save Changes.
9. Go back up and click generate a developer token.
    - Take note of the token, you will need it later.
    - This token is only valid for 60 minutes.


## Installation and configuration

### Get the code
```bash
git clone git@github.com:box-community/box-workshop-UIElements-HTML.git
cd box-workshop-UIElements-HTML
```

### Upload the "./UIE Samples" folder to the root of your box account

Drag and drop the local folder to the root of your box account, thisd will upload the folder and all its contents to your box account.

![Alt text](images/upload_samples.png)

Navigate to the UIE Samples folder and take note of the folder ID:

![Alt text](images/UIE_folder.png)
In the example above the folder ID is 221723756896

### Questions
If you get stuck or have questions, make sure to ask on our [Box Developer Forum](https://forum.box.com)

# Workshops
You'll find the workshop exercises in the [workshops](workshops) folder.
* [Explorer](workshops/Explorer/Explorer.md)
* [Picker](workshops/Picker/Picker.md)
* [Uploader](workshops/Uploader/Uploader.md)
* [Preview](workshops/Previewer/Previewer.md)
* [Sidebar](workshops/Sidebar/Sidebar.md)

## Running the samples
You'll need some sort of web server to run the samples. The easiest way is to use the python SimpleHTTPServer module.

```bash
python3 -m http.server 8000
```