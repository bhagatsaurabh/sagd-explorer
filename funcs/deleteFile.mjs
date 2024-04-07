export const deleteFile = (storage, id) => {
  storage.files
    .delete({
      fileId: id,
    })
    .then(
      () => console.log("deleted " + id),
      (err) => console.error(err)
    );
};
