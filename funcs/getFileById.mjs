export const getFileById = async (storage, id) => {
  const res = await storage.files.get({
    fileId: id,
  });

  return res.data;
};
