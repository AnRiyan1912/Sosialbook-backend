const multer = require("multer");
const moment = require("moment");

const fileUploader = ({
  destinationFolder = "",
  prefix = "",
  fileType = "",
}) => {
  const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${__dirname}/../public/images/${destinationFolder}`);
    },
    filename: (req, file, cb) => {
      const fileExtention = file.mimetype.split("/")[1];
      const filename = `${prefix}_${moment().format(
        "YYYY-MM-DD-HH-mm-ss"
      )}.${fileExtention}`;
      console.log(filename);
      cb(null, filename);
    },
  });
  const uploader = multer({
    storage: storageConfig,
    fileFilter: (req, file, cb) => {
      if (file.mimetype.split("/")[0] != fileType) {
        return cb(null, false);
      }
      return cb(null, true);
    },
    limits: 10000000,
  });
  return uploader;
};

const fileVideoUploader = ({
  destinationFolder = "",
  prefix = "",
  fileType = "",
}) => {
  const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${__dirname}/../public/videos/${destinationFolder}`);
    },
    filename: (req, file, cb) => {
      const fileExtention = file.mimetype.split("/")[1];
      const filename = `${prefix}_${moment().format(
        "YYYY-MM-DD-HH-mm-ss"
      )}.${fileExtention}`;
      console.log(filename);
      cb(null, filename);
    },
  });
  const uploader = multer({
    storage: storageConfig,
    fileFilter: (req, file, cb) => {
      if (file.mimetype.split("/")[0] != fileType) {
        return cb(null, false);
      }
      return cb(null, true);
    },
    limits: 10000000,
  });
  return uploader;
};

const blopUploader = ({ fileType }) => {
  return multer({
    fileFilter: (req, file, cb) => {
      if (file.mimetype.split("/")[0] != fileType) {
        return cb(null, false);
      }

      return cb(null, true);
    },
    limits: 100000,
  });
};

module.exports = { fileUploader, blopUploader, fileVideoUploader };
