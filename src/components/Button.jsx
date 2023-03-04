import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const Button = (props) => {
  const dispatcher = useDispatch();
  const {
    cName, tVal, func, Value,
  } = props;
  return (
    <button className={cName} type={tVal === 'button' ? 'button' : 'submit'} onClick={() => dispatcher(func)}>
      {Value}
    </button>
  );
};

Button.defaultProps = {
  cName: 'none',
  tVal: 'none',
  func: { name: 'Shakir' },
  Value: 'none',
};

Button.propTypes = {
  cName: PropTypes.string,
  tVal: PropTypes.string,
  func: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  Value: PropTypes.string,
};

export default Button;
