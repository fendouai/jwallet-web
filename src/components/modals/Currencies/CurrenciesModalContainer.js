import { connect } from 'react-redux'

import {
  openCurrenciesModal,
  closeCurrenciesModal,
  toggleDigitalAsset,
  searchCurrencies,
  sortCurrencies,
} from 'routes/JWallet/modules/currencies'

import CurrenciesModal from './CurrenciesModal'

const mapStateToProps = state => ({
  ...state.currencies,
  modalName: 'currencies',
})

const mapDispatchToProps = {
  openCurrenciesModal,
  closeCurrenciesModal,
  toggleDigitalAsset,
  searchCurrencies,
  sortCurrencies,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesModal)
