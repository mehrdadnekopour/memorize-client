import { FC } from 'react';
import { convertFileToBase64 } from '../../utils';

const UploadButtonB64: FC<{
  value: any;
  onChange: (base64: string) => void;
}> = ({ value, onChange }) => {
  return (
    <input
      id="icon-button-file"
      type="file"
      multiple={false}
      accept="image/*"
      onChange={async (e) => {
        const selectedImage = e.target.files?.[0];
        if (!!selectedImage) {
          const b64 = await convertFileToBase64(selectedImage);
          onChange(b64);
        }
      }}
    />
  );
};

export { UploadButtonB64 };
