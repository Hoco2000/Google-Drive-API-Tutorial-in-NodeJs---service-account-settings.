// list file in speciifcs folder
var parents=  ""
drive.files.list({

    auth: jwtClient,
    pageSize: 10,
    q: "'" + parents + "' in parents and trashed=false",
    fields: 'files(id, name)',
  }, (err, {data}) => {
    if (err) return console.log('The API returned an error: ' + err);
    const files = data.files;
    if (files.length) {
      console.log('Files:');
      files.map((file) => {
        console.log(`${file.name} (${file.id})`);
      });
    } else {
      console.log('No files found.');
    }
  });
