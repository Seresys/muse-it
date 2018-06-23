import fs from 'fs';
import Files from './model';

const list = async (req, res) => {
  const files = await Files.find().sort('date');

  res.json(files);
};

const upload = async (req, res) => {
  const { name, originalName } = req.file;

  const file = await Files.create({
    name,
    originalName,
  });

  res.json(file);
};

const remove = async (req, res) => {
  const { id } = req.params;

  const file = await Files.findOneAndRemove({
    id,
  });

  await fs.unlink(`.uploads/${file.name}`);

  res.json(file);
};

export {
  list,
  upload,
  remove,
};
