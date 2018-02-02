import React from 'react'
import PropTypes from 'prop-types'

import { JIcon, JPopover } from 'components/base'

function KeystoreManagerPopover({ onClickOutside }) {
  return (
    <JPopover
      onClickOutside={onClickOutside}
      body={(
        <div className='keystore-manager-popover'>
          <div className='popover__item'>
            <JIcon name='small-backup' className='popover__icon' small />
            <span className='popover__label'>
              {i18n('modals.keystore.keystoreManagerAction.backupKeystore')}
            </span>
          </div>
          <div className='popover__item'>
            <JIcon name='gear' className='popover__icon' small />
            <span className='popover__label'>
              {i18n('modals.keystore.keystoreManagerAction.changePassword')}
            </span>
          </div>
          <div className='popover__item popover__item--gray'>
            <JIcon name='small-clear' className='popover__icon' small />
            <span className='popover__label'>
              {i18n('modals.keystore.keystoreManagerAction.removeAccounts')}
            </span>
          </div>
        </div>
      )}
      name='keystore-manager'
    />
  )
}

KeystoreManagerPopover.propTypes = {
  /* optional */
  onClickOutside: PropTypes.func,
}

KeystoreManagerPopover.defaultProps = {
  onClickOutside: null,
}

export default KeystoreManagerPopover
