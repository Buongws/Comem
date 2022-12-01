const Validation = (values) => {
  const error = {};

  if (!values.name) {
    error.name = "Hãy điền tên";
  } else if (values.name.length < 5) {
    error.name = "Tên phải lớn hơn 5 kí tự ";
  }

  if (!values.password) {
    error.password = "Hãy điền mật khẩu";
  } else if (values.name.length < 8) {
    error.name = "Mật khẩu phải có ít nhất 8 kí tự";
  }

  return error;
};

export default Validation;
