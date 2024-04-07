export const listAll = async (storage) => {
  const res = await storage.files.list({
    pageSize: 100,
    fields: "nextPageToken, files(id, name, parents)",
  });

  return res.data.files;
};
