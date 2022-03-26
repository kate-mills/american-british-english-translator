const chai = require('chai')
const assert = chai.assert

const Translator = require('../components/translator.js')
let translator = new Translator()

let locale = ['american-to-british', 'british-to-american']

suite('Unit Tests', () => {
  suite('From American To British English', () => {
    test('Translate Mangoes are my favorite fruit.', function () {
      assert.equal(
        'Mangoes are my <span class="highlight">favourite</span> fruit.',
        translator.translate('Mangoes are my favorite fruit.', locale[0])
      )
    })

    test('I ate yogurt for breakfast.', function () {
      assert.equal(
        'I ate <span class="highlight">yoghurt</span> for breakfast.',
        translator.translate('I ate yogurt for breakfast.', locale[0])
      )
    })

    test("We had a party at my friend's condo.", function () {
      assert.equal(
        'Everything looks good to me!',
        translator.translate("We had a party at my friend's condo.", locale[0])
      )
    })

    test('Can you toss this in the trashcan for me?', function () {
      assert.equal(
        'Can you toss this in the <span class="highlight">bin</span> for me?',
        translator.translate(
          'Can you toss this in the trashcan for me?',
          locale[0]
        )
      )
    })

    test('The parking lot was full.', function () {
      assert.equal(
        'Everything looks good to me!',
        translator.translate('The parking lot was full.', locale[0])
      )
    })

    test('Like a high tech Rube Goldberg machine. ', function () {
      assert.equal(
        'Everything looks good to me!',
        translator.translate(
          'Like a high tech Rube Goldberg machine. ',
          locale[0]
        )
      )
    })

    test('To play hooky means to skip class or work.', function () {
      assert.equal(
        'Everything looks good to me!',
        translator.translate(
          'To play hooky means to skip class or work.',
          locale[0]
        )
      )
    })

    test('No Mr. Bond, I expect you to die. ', function () {
      assert.equal(
        'No <span class="highlight">Mr</span> Bond, I expect you to die.',
        translator.translate('No Mr. Bond, I expect you to die.', locale[0])
      )
    })
    test('Dr. Grosh will see you now.', function () {
      assert.equal(
        '<span class="highlight">Dr</span> Grosh will see you now.',
        translator.translate('Dr. Grosh will see you now.', locale[0])
      )
    })
    test('Lunch is at 12:15 today.', function () {
      assert.equal(
        'Lunch is at <span class="highlight">12.15</span> today.',
        translator.translate('Lunch is at 12:15 today.', locale[0])
      )
    })
  })
  suite('From British To American English', () => {
    test('We watched the footie match for a while.', function () {
      assert.equal(
        'We watched the <span class="highlight">soccer</span> match for a while.',
        translator.translate(
          'We watched the footie match for a while.',
          locale[1]
        )
      )
    })

    test('Paracetamol takes up to an hour to work.', function () {
      assert.equal(
        '<span class="highlight">Acetaminophen</span> takes up to an hour to work.',
        translator.translate(
          'Paracetamol takes up to an hour to work.',
          locale[1]
        )
      )
    })

    test('First, caramelise the onions.', function () {
      assert.equal(
        'First, <span class="highlight">caramelize</span> the onions.',
        translator.translate('First, caramelise the onions.', locale[1])
      )
    })

    test('I spent the bank holiday at the funfair.', function () {
      assert.equal(
        'Everything looks good to me!',
        translator.translate(
          'I spent the bank holiday at the funfair.',
          locale[1]
        )
      )
    })
    test('I had a bicky then went to the chippy.', function () {
      assert.equal(
        'I had a <span class="highlight">cookie</span> then went to the chippy.',
        translator.translate(
          'I had a bicky then went to the chippy.',
          locale[1]
        )
      )
    })

    test(`I've just got bits and bobs in my bum bag.`, function () {
      assert.equal(
        `Everything looks good to me!`,
        translator.translate(
          `I've just got bits and bobs in my bum bag.`,
          locale[1]
        )
      )
    })

    test('The car boot sale at Boxted Airfield was called off', function () {
      assert.equal(
        'Everything looks good to me!',
        translator.translate(
          'The car boot sale at Boxted Airfield was called off',
          locale[1]
        )
      )
    })

    test('Have you met Mrs Kalyani?', function () {
      assert.equal(
        'Have you met <span class="highlight">Mrs.</span> Kalyani?',
        translator.translate('Have you met Mrs Kalyani?', locale[1])
      )
    })

    test("Prof Joyner of King's College, London.", function () {
      assert.equal(
        '<span class="highlight">Prof.</span> Joyner of King\'s College, London.',
        translator.translate(
          `Prof Joyner of King's College, London.`,
          locale[1]
        )
      )
    })

    test('Tea time is usually around 4 or 4.30.', function () {
      assert.equal(
        'Tea time is usually around 4 or <span class="highlight">4:30.</span>',
        translator.translate('Tea time is usually around 4 or 4.30.', locale[1])
      )
    })
  })
  suite('Highlight translation', () => {
    test('Mangoes are my favorite fruit', function () {
      assert.equal(
        '<span class="highlight">Mangoes are my favorite fruit</span>',
        translator.highlight('Mangoes are my favorite fruit')
      )
    })
    test('I ate yogurt for breakfast.', function () {
      assert.equal(
        '<span class="highlight">I ate yogurt for breakfast.</span>',
        translator.highlight('I ate yogurt for breakfast.')
      )
    })
    test('We watched the footie match for a while.', function () {
      assert.equal(
        '<span class="highlight">We watched the footie match for a while.</span>',
        translator.highlight('We watched the footie match for a while.')
      )
    })
    test('Paracetamol takes up to an hour to work.', function () {
      assert.equal(
        '<span class="highlight">Paracetamol takes up to an hour to work.</span>',
        translator.highlight('Paracetamol takes up to an hour to work.')
      )
    })
  })
})
