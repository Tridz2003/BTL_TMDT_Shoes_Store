import React, {useEffect} from "react";
import {useFormik} from "formik";
import {Button, Spinner} from "reactstrap";
import FormInput from "../../../../common/components/Shared/FormInput";
import {Link} from "react-router-dom";
import FormContainer from "../../../../common/components/Shared/FormContainer";
import {RegisterValidationSchema} from "../../../../common/validation/auth/registerValidation";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {register} from "../../../../features/user/userServices";
import {resetMutationResult} from "../../../../features/user/userSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isMutation} = useSelector((state) => state.user);

  const handleSubmitForm = async (values, actions) => {
    dispatch(register(values));
  };

  const {handleBlur, handleChange, handleSubmit, values, errors, touched} =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: RegisterValidationSchema,
      onSubmit: handleSubmitForm,
    });

  useEffect(() => {
    if (isMutation.success) {
      dispatch(resetMutationResult());
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [isMutation.success, navigate, dispatch]);

  return (
    <FormContainer head={"Đăng ký tài khoản"} handleSubmit={handleSubmit}>
      <FormInput
        errCondition={errors.username && touched.username}
        errMessage={errors.username}
        handleBlur={handleBlur}
        handleChange={handleChange}
        value={values.username}
        type="text"
        placeholder="Tên người dùng"
        name="username"
      />
      <FormInput
        errCondition={errors.email && touched.email}
        errMessage={errors.email}
        handleBlur={handleBlur}
        handleChange={handleChange}
        value={values.email}
        type="email"
        placeholder="Địa chỉ email"
        name="email"
      />
      <FormInput
        errCondition={errors.password && touched.password}
        errMessage={errors.password}
        handleBlur={handleBlur}
        handleChange={handleChange}
        value={values.password}
        name="password"
        type="password"
        placeholder="Mật khẩu"
      />
      <FormInput
        errCondition={errors.confirmPassword && touched.confirmPassword}
        errMessage={errors.confirmPassword}
        handleBlur={handleBlur}
        handleChange={handleChange}
        value={values.confirmPassword}
        name="confirmPassword"
        type="password"
        placeholder="Xác nhận mật khẩu"
      />
      {isMutation?.loading ? (
        <Button color="primary" size="sm" block disabled>
          <Spinner size={"sm"} />
        </Button>
      ) : (
        <Button color="primary" size="sm" block type="submit">
          Đăng ký
        </Button>
      )}

      <p className="text-center mt-4" style={{fontSize: "14px"}}>
        Đã có tài khoản? <Link to={"/login"}>Đăng nhập</Link>
      </p>
    </FormContainer>
  );
};

export default RegisterForm;
