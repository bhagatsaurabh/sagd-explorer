export const listFilesIn = async (storage, id) => {
  const res = await storage.files.list({
    pageSize: 100,
    fields: "nextPageToken, files(id, name, parents)",
    q: `trashed=false and '${id}' in parents`,
  });

  return res.data.files;
};
