import _4u from './img/4u@2x.png';
import a5 from './img/a5@2x.png';
import bitrix from './img/bitrix@2x.png';
import cs_cart from './img/cs.cart@2x.png';
import drupal from './img/drupal@2x.png';
import hostcms from './img/hostcms@2x.png';
import insales from './img/insales@2x.png';
import jimdo from './img/jimdo@2x.png';
import joomla from './img/joomla@2x.png';
import modx from './img/modx@2x.png';
import netcat from './img/netcat@2x.png';
import nethouse from './img/nethouse@2x.png';
import opencart from './img/opencart@2x.png';
import setup from './img/setup@2x.png';
import storeland from './img/storeland@2x.png';
import ucoz from './img/ucoz@2x.png';
import umi from './img/umi@2x.png';
import umi_cms from './img/umi_cms@2x.png';
import wix from './img/wix@2x.png';
import wordpress from './img/wordpress@2x.png';
import vigbo from './img/vigbo@2x.png';


// Список поддерживаемых CMS
const engineOptions = {
    four_u: {value: 'four_u', label: '4u', img: _4u},
    a5: {value: 'a5', label: 'a5', img: a5},
    bitrix: {value: 'bitrix', label: '1C-Bitrix', img: bitrix},
    cs_cart: {value: 'cs_cart', label: 'CS-Cart', img: cs_cart},
    drupal: {value: 'drupal', label: 'Drupal', img: drupal},
    hostcms: {value: 'hostcms', label: 'HostCMS', img: hostcms},
    insales: {value: 'insales', label: 'InSales', img: insales},
    jimdo: {value: 'jimdo', label: 'Jimdo', img: jimdo},
    joomla: {value: 'joomla', label: 'Joomla', img: joomla},
    modx: {value: 'modx', label: 'MODX', img: modx},
    netcat: {value: 'netcat', label: 'NetCat', img: netcat},
    nethouse: {value: 'nethouse', label: 'NetHouse', img: nethouse},
    opencart: {value: 'opencart', label: 'OpenCart', img: opencart},
    setup: {value: 'setup', label: 'Setup', img: setup},
    storeland: {value: 'storeland', label: 'StoreLand', img: storeland},
    ucoz: {value: 'ucoz', label: 'uCoz', img: ucoz},
    umi_cms: {value: 'umi_cms', label: 'UMI.CMS', img: umi_cms},
    umi: {value: 'umi', label: 'UMI', img: umi},
    vigbo: {value: 'vigbo', label: 'Vigbo', img: vigbo},
    wix: {value: 'wix', label: 'WiX', img: wix},
    wordpress: {value: 'wordpress', label: 'WordPress', img: wordpress},
}

const siteEngineOptions = Object.values(engineOptions)
const siteEngineOptionsWithUnknown = [
    {value: '', label: 'Я не знаю', img: null},
    ...siteEngineOptions
]

export { engineOptions, siteEngineOptions, siteEngineOptionsWithUnknown }
