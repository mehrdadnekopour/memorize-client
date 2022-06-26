import { FC, FormEvent } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useClasses from './Form.styles';
import { UploadButtonB64 } from '../common';
import { Post } from '../../ts/types';

type FromProps = {
  postData: Post;
  isNew: boolean;
  handleChangeInput: ({ name, value }: { name: string; value: string }) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onResetForm: () => void;
};

const FormLayout: FC<FromProps> = ({
  postData,
  isNew,
  handleChangeInput,
  onSubmit,
  onResetForm,
}) => {
  const classes = useClasses();

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={onSubmit}
      >
        <Typography variant="h6">
          {isNew ? 'Creating a Memory' : 'Modifying a Memory'}
        </Typography>
        <TextField
          variant="outlined"
          onChange={(e) => handleChangeInput(e.target)}
          fullWidth
          label="creator"
          name="creator"
          value={postData.creator}
        />
        <TextField
          variant="outlined"
          onChange={(e) => handleChangeInput(e.target)}
          fullWidth
          label="title"
          name="title"
          value={postData.title}
        />
        <TextField
          variant="outlined"
          onChange={(e) => handleChangeInput(e.target)}
          fullWidth
          label="message"
          name="message"
          value={postData.message}
        />
        <TextField
          variant="outlined"
          onChange={(e) => handleChangeInput(e.target)}
          fullWidth
          label="tags"
          name="tags"
          value={postData.tags}
        />
        <div className={classes.fileInput}>
          <UploadButtonB64
            value={postData.selectedFile}
            onChange={(b64) =>
              handleChangeInput({ name: 'selectedFile', value: b64 })
            }
          />
        </div>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          size="large"
          type="submit"
          className={classes.buttonSubmit}
        >
          {isNew ? 'Submit' : 'Update'}
        </Button>
        <Button
          variant="contained"
          fullWidth
          size="small"
          color="secondary"
          onClick={onResetForm}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default FormLayout;
