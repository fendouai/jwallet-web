import React from 'react'

import { JDropdown, JIcon } from 'components/base'

import KeystoreManagerPopover from './Popover'

function KeystoreManager() {
  const title = <div className='icon--dots-wrapper'><JIcon name='dots' /></div>

  return (
    <div className='keystore-manager-container pull-right'>
      <JDropdown className='keystore-manager' title={title}>
        <KeystoreManagerPopover />
      </JDropdown>
    </div>
  )
}

export default KeystoreManager
