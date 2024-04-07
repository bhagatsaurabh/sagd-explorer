export const createFolder = async (storage, parentId, name) => {
  const fileMetaData = {
    name,
    mimeType: "application/vnd.google-apps.folder",
    parents: [parentId],
  };
  const res = await storage.files
    .create({
      fields: "id",
      resource: fileMetaData,
    })
    .catch((err) => console.log(err));
  console.log(res.data);
};
