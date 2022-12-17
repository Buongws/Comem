const Validation = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.username) {
    errors.username = "Họ tên không được để trống.!";
  }
  // if (!regex.test(values.username)) {
  //   errors.username = "Không được phép có kí tự đặc biệt ";
  // }
  if (!values.email) {
    errors.email = "Email không được để trống!";
  } else if (!regex.test(values.email)) {
    errors.email = "Sai định dạng email, hãy điền lại !";
  }
  if (!values.address) {
    errors.address = "Địa chỉ không được để trống";
  }
  if (!values.city) {
    errors.city = "Thành phố không được để trống";
  }
  if (!values.state) {
    errors.state = "Quốc Gia không được để trống";
  }
  if (!values.nameCard) {
    errors.nameCard = "Tên chủ thẻ không được để trống";
  }
  if (!values.numCard) {
    errors.NumCard = "Số thẻ thanh toán không được để trống";
  }
  if (!values.zipCode) {
    errors.zipCode = "Mã số vùng không được để trống";
  }
  if (!values.yearCard) {
    errors.yearCard = "Năm sử dụng không được để trống";
  } else if (values.yearCard.length > 4) {
    errors.yearCard = "Nam su dung phai dung dinh dang";
  }
  if (!values.CVV) {
    errors.CVV = "CVV không được để trống";
  }
  return errors;
};

export default Validation;
