exports.getContactUs =  (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
  }