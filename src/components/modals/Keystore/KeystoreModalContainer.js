import { connect } from 'react-redux'

import {
  setCurrentKeystoreAccount,
  removeKeystoreAccount,
  setKeystoreAccountName,
  setKeystoreAccountDerivationPath,
  setKeystoreAccountAddressIndex,
  getKeystoreAddressesFromMnemonic,
  sortAccounts,
  openKeystoreModal,
  closeKeystoreModal,
  setEditAccountName,
  setNewAccountName,
} from 'routes/JWallet/modules/keystore'

import { openImportKeystoreAccountModal } from 'routes/JWallet/modules/modals/importKeystoreAccount'
import { openNewDerivationPathModal } from 'routes/JWallet/modules/modals/newDerivationPath'
import { openNewKeystoreAccountModal } from 'routes/JWallet/modules/modals/newKeystoreAccount'

import KeystoreModal from './KeystoreModal'

const mapStateToProps = state => ({
  ...state.keystore,
  modalName: 'keystore',
})

const mapDispatchToProps = {
  setCurrentKeystoreAccount,
  removeKeystoreAccount,
  setKeystoreAccountName,
  setKeystoreAccountDerivationPath,
  setKeystoreAccountAddressIndex,
  getKeystoreAddressesFromMnemonic,
  sortAccounts,
  openKeystoreModal,
  closeKeystoreModal,
  setEditAccountName,
  setNewAccountName,
  openImportKeystoreAccountModal,
  openNewDerivationPathModal,
  openNewKeystoreAccountModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(KeystoreModal)
