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

  const success = await Files.deleteOne({
    id,
  });

  res.json(success);
};

export {
  list,
  upload,
  remove,
};
