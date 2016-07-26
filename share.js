'use strict'

const m = require('mithril');
const qrcode = require('./mithril_components/qrcode/qrcode');


const controller = (options) => {

    
}

const view = (ctrl) => {
    return m('div.share', {type: 'widget'}, m('p', qrcode.view())
    );
}

module.exports = {
    controller: controller,
    view: view
}
