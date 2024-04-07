const { google } = require("googleapis");

const credentialFilename = "rms-one-key.json";
const scopes = ["https://www.googleapis.com/auth/drive"];
const auth = new google.auth.GoogleAuth({ keyFile: credentialFilename, scopes: scopes });
const drive = google.drive({ version: "v3", auth });

const deleteFile = (id) => {
    drive.files.delete({
        'fileId': id
    }).then(() => console.log('deleted ' + id), (err) => console.error(err));
}

const createFolder = async () => {
    const fileMetaData = {
        name: "2022 11 01",
        mimeType: "application/vnd.google-apps.folder",
        parents: ["1D2GbO25X1LUQGZLpJh8dZb4kc07z0J_8"]
    };
    const res = await drive.files
        .create({
            fields: "id",
            resource: fileMetaData,
        })
        .catch((err) => console.log(err));
    console.log(res.data);
};

const getFileById = async (id) => {
    const res = await drive.files.get({
        fileId: id
    });

    return res.data;
}

const listFilesIn = async (id) => {
    const res = await drive.files.list({
        pageSize: 100,
        fields: "nextPageToken, files(id, name, parents)",
        q: "trashed=false and '" + id + "' in parents"
        // q: "mimeType='application/vnd.google-apps.folder' and trashed=false and name='2022 11 01' and '1D2GbO25X1LUQGZLpJh8dZb4kc07z0J_8' in parents"
    });

    return res.data.files;
}

const listAll = async () => {
    const res = await drive.files.list({
        pageSize: 100,
        fields: "nextPageToken, files(id, name, parents)",
    });

    return res.data.files;
}

const listFoldersIn = async (id) => {
    const res = await drive.files.list({
        pageSize: 100,
        fields: "nextPageToken, files(id, name)",
        q: "mimeType='application/vnd.google-apps.folder' and trashed=false and '" + id + "' in parents",
    });

    return res.data.files;
}

// createFolder().then(() => console.log('created folder'), (err) => console.error(err));

/* listFilesIn('1D2GbO25X1LUQGZLpJh8dZb4kc07z0J_8').then(files => {
    files.forEach(file => console.log(file));
}); */

listAll().then(files => {
    files.forEach(file => console.log(file));
});

// getFileById('0AEMpUw8URt-ZUk9PVA').then(file => console.log(file));

/* listAll().then(files => {
    files.filter(file => file.name !== 'System').forEach(file => deleteFile(file.id));
}); */