// upload file in specific folder
var folderId = "enter here the folder you target";
var fileMetadata = {
  'name': 'text.txt',
  parents: [folderId]
};
var media = {
  mimeType: 'text/plain',
  body: fs.createReadStream(path.join(__dirname, './text.txt'))
};
drive.files.create({
  auth: jwtClient,
  resource: fileMetadata,
  media: media,
  fields: 'id'
}, function(err, file) {
  if (err) {
    // Handle error
    console.error(err);
  } else {
    console.log('File Id: ', file.id);
  }
});
