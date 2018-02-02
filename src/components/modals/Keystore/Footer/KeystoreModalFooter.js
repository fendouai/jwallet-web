import React from 'react'
import PropTypes from 'prop-types'

import JIcon from 'components/base/JIcon'
import KeystoreManager from './Manager'

function KeystoreModalFooter({
  addNewKeystoreAccount,
  clearKeystore,
  importNewKeystoreAccount,
}) {
  return (
    <div className='keystore-modal-footer clear'>
      <div className='keystore-modal-footer__item pull-left' onClick={addNewKeystoreAccount}>
        <JIcon name='small-add' className='keystore-modal-footer__icon' small />
        {i18n('modals.keystore.createAccountTitle')}
      </div>
      <div className='keystore-modal-footer__item pull-left' onClick={importNewKeystoreAccount}>
        <JIcon name='small-import' className='keystore-modal-footer__icon' small />
        {i18n('modals.keystore.importAccountTitle')}
      </div>
      <KeystoreManager
        clearKeystore={clearKeystore}
      />
    </div>
  )
}

KeystoreModalFooter.propTypes = {
  addNewKeystoreAccount: PropTypes.func.isRequired,
  clearKeystore: PropTypes.func.isRequired,
  importNewKeystoreAccount: PropTypes.func.isRequired,
}

export default KeystoreModalFooter
