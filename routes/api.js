const Translator = require('../components/translator.js');

module.exports = function(app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log(req.body)
      const { text, locale } = req.body
       if (text === '') {
        return res.json({ error: 'No text to translate' })
      }
      if (!locale || !text) {
        return res.json({ error: 'Required field(s) missing' })
      }  
      if (['american-to-british', 'british-to-american'].indexOf(locale) < 0) {
        return res.json({ error: 'Invalid value for locale field' })
      }
      let translation = translator.translate(text, locale)
      return res.json({ text, translation })
    });
};
