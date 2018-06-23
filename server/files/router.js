import express from 'express';
import multer from 'multer';

import { MIME_TYPES, MAX_SIZE, MAX_FILES } from '../../shared/file.shared';

import { list, upload, remove } from './api';

const fileFilter = (req, file, cb) => {
  if (MIME_TYPES.includes(file.mimetype)) {
    return cb(null, true);
  }

  return cb(`Error: File upload only supports the following filetypes - ${MIME_TYPES.join()}`);
};

const multerUpload = multer({
  dest: '.uploads/',
  fileFilter,
  limits: {
    fileSize: MAX_SIZE,
    files: MAX_FILES,
  },
});

const router = express.Router();

router.get('/', list);
router.post('/', multerUpload.array('midifile'), upload);
router.delete('/:id', remove);

export default router;
