import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Radio = props => {
  const {
    className,
    value,
    name,
    label,
    error,
    disabled,
    style,
    ...restProps
  } = props
  return (
    <label
      className={cx(
        styles['c-input-radio'],
        {
          [styles['is-error']]: error
        },
        className
      )}
      aria-disabled={disabled}
      style={style}
    >
      <input
        type="radio"
        value={value}
        name={name}
        disabled={disabled}
        {...restProps}
      />
      <span>{label}</span>
    </label>
  )
}

Radio.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired
}

Radio.defaultProps = {
  error: false
}

export default Radio
