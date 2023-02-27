import express from 'express';
import ImageProperties from '../models/image-properties';
import resizeImg from '../utilities/img-handlers';

const routes = express.Router();

routes.get('/image', async (req: express.Request, res: express.Response): Promise<void> => {
  const imageProperties: ImageProperties = {
    filename: req.query.filename?.toString(),
    width: parseInt(req.query.width as string),
    height: parseInt(req.query.height as string)
  };
  if (imageProperties.filename) {
    try {
      const resizedImage = resizeImg(imageProperties);
      resizedImage.then((outputImgPath) => {
        if (outputImgPath) {
          res.sendFile(outputImgPath);
        } else {
          res.status(404).send('Image not found');
        }
      });
    } catch (err) {
      res.status(500).send('Oops!');
    }
  } else {
    res.send('HI');
  }
});

export default routes;
