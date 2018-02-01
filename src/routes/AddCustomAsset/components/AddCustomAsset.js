import React from 'react'
import PropTypes from 'prop-types'

import JTextInput from 'components/base/JTextInput'

const AddCustomAsset = ({
  setAddress,
  setName,
  setSymbol,
  setDecimals,
  invalidFields,
  address,
  name,
  symbol,
  decimals,
}) => {
  const fields = [
    { name: 'address', value: address, handler: setAddress },
    { name: 'name', value: name, handler: setName },
    { name: 'symbol', value: symbol, handler: setSymbol },
    { name: 'decimals', value: decimals, handler: setDecimals },
  ]

  return (
    <div className='add-custom-asset-view'>
      {fields.map(({ name, value, handler }) => (
        <JTextInput
          key={name}
          onValueChange={handler}
          name={`add-custom-asset-${name}`}
          placeholder={i18n(`modals.addCustomToken.placeholder.${name}`)}
          value={value}
          errorMessage={invalidFields[name]}
          editable
        />
      ))}
    </div>
  )
}

AddCustomAsset.propTypes = {
  setAddress: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setSymbol: PropTypes.func.isRequired,
  setDecimals: PropTypes.func.isRequired,
  // add: PropTypes.func.isRequired,
  invalidFields: PropTypes.shape({}).isRequired,
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  decimals: PropTypes.string.isRequired,
}

export default AddCustomAsset
