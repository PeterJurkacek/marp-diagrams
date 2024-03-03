const { Marp } = require('@marp-team/marp-core')

const marpKrokiPlugin = require('./plugins/kroki-plugin')
const marpHideSlidesPlugin = require('./plugins/hide-slide-plugin')

module.exports = (opts) => new Marp(opts).use(marpHideSlidesPlugin).use(marpKrokiPlugin)