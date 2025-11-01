export const uploadImage = (file: File): Promise<string> =>
  new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    setTimeout(() => resolve(url), 800);
});

/*We combine into a service*/
export const storageService = {
  uploadImage,
};