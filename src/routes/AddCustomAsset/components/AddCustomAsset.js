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
    { key: 'address', value: address, handler: setAddress },
    { key: 'name', value: name, handler: setName },
    { key: 'symbol', value: symbol, handler: setSymbol },
    { key: 'decimals', value: decimals, handler: setDecimals },
  ]

  return (
    <div className='add-custom-asset-view'>
      {fields.map(({ key, value, handler }) => (
        <JTextInput
          key={key}
          onValueChange={handler}
          name={`add-custom-asset-${key}`}
          placeholder={i18n(`modals.addCustomToken.placeholder.${key}`)}
          value={value}
          errorMessage={invalidFields[key]}
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
