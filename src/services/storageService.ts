
export const uploadImage = (file: File): Promise<string> => {
    return new Promise((resolve) => {

      const blobUrl = URL.createObjectURL(file);

      setTimeout(() => {
        resolve(blobUrl);
      }, 500);
    });
};