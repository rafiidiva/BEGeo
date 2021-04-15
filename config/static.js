module.exports={
    public: {
    root: path.join(__dirname,"public"),
    prefix:"/"  
    },
    assets: {
        root: path.join(__dirname, 'public/assets'),
    prefix: '/assets'
    },
    forms: {
        root: path.join(__dirname, 'public/forms'),
    prefix: '/forms',
  decorateReply: false
    },
};