export const listFoldersIn = async (storage, id) => {
  const res = await storage.files.list({
    pageSize: 100,
    fields: "nextPageToken, files(id, name)",
    q: `mimeType='application/vnd.google-apps.folder' and trashed=false and '${id}' in parents`,
  });

  return res.data.files;
};
