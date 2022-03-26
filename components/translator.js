const americanOnly = require('./american-only.js')
const americanToBritishSpelling = require('./american-to-british-spelling.js')
const americanToBritishTitles = require('./american-to-british-titles.js')
const britishOnly = require('./british-only.js')

class Translator {
  highlight(translated, original = '') {
    let isUpper = original ? original[0].toUpperCase() === original[0] : null
    let word = isUpper
      ? translated[0].toUpperCase().concat(translated.slice(1))
      : translated
    return `<span class=\"highlight\">${word}</span>`
  }

  getFirstIndex(entries, letter, index) {
    let num = entries.findIndex((entry) => {
      return entry[index][0] === letter
    })
    return num > -1 ? num : 0
  }

  getLastIndex(entries, letter, index) {
    let last = entries.length

    while (last--) {
      if (entries[last][index][0] === letter) {
        return last
      }
    }
    return last
  }

  sliceEntries(entries, letter, index) {
    let first = this.getFirstIndex(entries, letter, index)
    let last = this.getLastIndex(entries, letter, index)
    return entries.slice(first, last + 1)
  }

  findWordInEntries(entries, word, index) {
    let pair = entries.find((entry) => {
      return entry[index] === word.toLowerCase()
    })
    return pair ? pair[Number(!index)] : pair
  }

  timeChecker(word, spacer) {
    let regex = new RegExp(`[0-9]{1,2}[${spacer}][0-9]{2}`, 'g')
    return word.match(regex)
  }

  americanToBritish(word) {
    if (this.timeChecker(word, ':')) {
      return this.highlight(word.replace(':', '.'))
    }
    let titles = Object.entries(americanToBritishTitles)
    let american = this.sliceEntries(Object.entries(americanOnly), word[0], 0)
    let spelling = this.sliceEntries(
      Object.entries(americanToBritishSpelling),
      word[0],
      0
    )
    let british = Object.entries(britishOnly)
    let found =
      this.findWordInEntries(titles, word, 0) ||
      this.findWordInEntries(british, word, 1) || // american word is index 1
      this.findWordInEntries(american, word, 0) ||
      this.findWordInEntries(spelling, word, 0)

    return found ? this.highlight(found, word) : null
  }

  britishToAmerican(word) {
    if (this.timeChecker(word, '.')) {
      return this.highlight(word.replace('.', ':'))
    }
    let titles = Object.entries(americanToBritishTitles)
    let british = this.sliceEntries(Object.entries(britishOnly), word[0], 0)
    let spelling = this.sliceEntries(
      Object.entries(americanToBritishSpelling),
      word[0],
      1
    )
    let american = Object.entries(americanOnly)

    let found =
      this.findWordInEntries(titles, word, 1) ||
      this.findWordInEntries(british, word, 0) || // american word is index 1
      this.findWordInEntries(american, word, 1) ||
      this.findWordInEntries(spelling, word, 1)

    return found ? this.highlight(found, word) : null
  }

  mapFromAToB(text) {
    let changed = 0

    let translation = text.split(' ').map((word, index) => {
      if (word.length > 2) {
        let translated = this.americanToBritish(word)
        if (!translated) {
          return word
        }
        changed++
        return translated
      }
      return word
    })
    return { translation: translation.join(' '), changed }
  }

  mapFromBToA(text) {
    let changed = 0
    let translation = text.split(' ').map((word, index) => {
      if (word.length > 2) {
        let translated = this.britishToAmerican(word)
        if (!translated) {
          return word
        }
        changed++
        return translated
      }
      return word
    })
    return { translation: translation.join(' '), changed }
  }

  translate(text, locale) {
    let index = ['american-to-british', 'british-to-american'].indexOf(locale)

    let { translation, changed } =
      index === 0 ? this.mapFromAToB(text) : this.mapFromBToA(text)

    return changed > 0 ? translation : 'Everything looks good to me!'
  }
}

module.exports = Translator
