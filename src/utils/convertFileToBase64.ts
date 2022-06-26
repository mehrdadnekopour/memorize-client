export const convertFileToBase64 = async (file: File): Promise<any> =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (err) => {
      reject(err);
    };
  });
