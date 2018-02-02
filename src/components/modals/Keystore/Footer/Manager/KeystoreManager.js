import React from 'react'
import PropTypes from 'prop-types'

import { JDropdown, JIcon } from 'components/base'

import KeystoreManagerPopover from './Popover'

function KeystoreManager(props) {
  const title = <div className='icon--dots-wrapper'><JIcon name='dots' /></div>

  return (
    <div className='keystore-manager-container pull-right'>
      <JDropdown className='keystore-manager' title={title}>
        <KeystoreManagerPopover {...props} />
      </JDropdown>
    </div>
  )
}

KeystoreManager.propTypes = {
  clearKeystore: PropTypes.func.isRequired,
}

export default KeystoreManager
