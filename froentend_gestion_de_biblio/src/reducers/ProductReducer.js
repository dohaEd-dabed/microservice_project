import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from '../actions/types'


export default function(state = [], action) {
    switch (action.type) {
        case PRODUCTS_FETCH:
        case PRODUCT_FETCH:
            return action.payload
        case PRODUCT_CREATE:
            return { saved: true, msg: 'Produit enregistré avec succès'}
        case PRODUCT_UPDATE:
            return { ...state, saved: true, msg: 'Enregistrement du produit terminé avec succès'}
        default:
            return state
    }
}