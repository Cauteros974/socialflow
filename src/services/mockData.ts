/* 
    Simulation uploading file to the server
    @param-file  - file(picture) 
*/

const uploadImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        try{
            const blobUrl = URL.createObjectURL(file);

            // Simulate a small delay
            setTimeout(() => {
                resolve(blobUrl);
            }, 1500);
        } catch(error) {
            reject(error);
        }
    });
};

export const storageService = {
    uploadImage,
};