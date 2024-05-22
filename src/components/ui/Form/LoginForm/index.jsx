import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, TextField } from "../../../ui";
import "./index.scss";
import { CONSTANT } from "../../../../utils/constant";
import { validations } from "../../../../utils/validate";

import { tokenService } from "../../../../services/token-service";
import useUserQuery, { useLogin, useRegister } from "../../../../hooks/useUser";
const initialValues = {
    userName: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
};
export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [variantForm, setVariantForm] = useState(CONSTANT.LOGIN);

    const { mutate: mutateLogin, isPending, data } = useLogin();
    const { mutate: mutateRegister } = useRegister();

    const userId = data?.user?.id;
    const accessToken = tokenService().getLocalAccessToken();
    useUserQuery(userId, accessToken);

    const formik = useFormik({
        initialValues,
        validationSchema:
            variantForm === CONSTANT.REGISTER
                ? validations.registerValidationSchema
                : validations.loginValidationSchema,
        onSubmit: (values) => {
            if (variantForm === CONSTANT.LOGIN) {
                mutateLogin(values);
            } else {
                mutateRegister(values);
            }
            formik.resetForm();
        },
    });
    const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
        formik;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        formik.validateField("password");
    };

    const handleSetVariant = () => {
        setVariantForm((prevVariantForm) =>
            prevVariantForm === CONSTANT.REGISTER
                ? CONSTANT.LOGIN
                : CONSTANT.REGISTER
        );

        formik.resetForm();
    };

    return (
        <div className="login">
            <header className="login_header">
                <h3>{variantForm}</h3>
                <div>Become a part of our community!</div>
            </header>
            <form onSubmit={handleSubmit} className="login_form">
                <TextField
                    className="mb-1"
                    label="user name"
                    name="userName"
                    required={true}
                    onChange={handleChange("userName")}
                    onBlur={handleBlur}
                    value={values.userName}
                    error={Boolean(errors.userName)}
                    helperText={errors.userName}
                    success={touched.userName && !errors.userName}
                />
                <TextField
                    className="mb-1"
                    label="Password"
                    id="password"
                    required={true}
                    onChange={handleChange("password")}
                    onBlur={handleBlur}
                    helperText={errors.password}
                    error={Boolean(errors.password)}
                    success={touched.password && !errors.password}
                    value={values.password}
                    type={showPassword ? "text" : "password"}
                    showIcon={true}
                    icon={
                        showPassword ? "ri:eye-fill" : "humbleicons:eye-close"
                    }
                    onClickIcon={togglePasswordVisibility}
                />
                {variantForm === CONSTANT.REGISTER && (
                    <>
                        <TextField
                            className="mb-1"
                            label="Email"
                            name="email"
                            required={true}
                            onChange={handleChange("email")}
                            onBlur={handleBlur}
                            value={values.email}
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                            success={touched.email && !errors.email}
                        />
                        <div className="form_row-2">
                            <TextField
                                className="mb-1"
                                label="First Name"
                                name="first_name"
                                required={true}
                                onChange={handleChange("first_name")}
                                onBlur={handleBlur}
                                value={values.first_name}
                                error={Boolean(errors.first_name)}
                                helperText={errors.first_name}
                                success={
                                    touched.first_name && !errors.first_name
                                }
                            />
                            <TextField
                                className="mb-1"
                                label="Last Name"
                                name="last_name"
                                required={true}
                                onChange={handleChange("last_name")}
                                onBlur={handleBlur}
                                value={values.last_name}
                                error={Boolean(errors.last_name)}
                                helperText={errors.last_name}
                                success={touched.last_name && !errors.last_name}
                            />
                        </div>
                    </>
                )}

                <div className="login_submit">
                    <Button
                        variant="primary"
                        size="large"
                        color="blue"
                        type="submit"
                        loading={isPending}>
                        {variantForm === CONSTANT.REGISTER
                            ? CONSTANT.REGISTER
                            : CONSTANT.LOGIN}
                    </Button>
                </div>
            </form>
            <div className="login_bottom">
                Not A Member?
                <Link onClick={handleSetVariant}>
                    {variantForm === CONSTANT.REGISTER
                        ? CONSTANT.LOGIN
                        : CONSTANT.REGISTER}
                </Link>
            </div>
        </div>
    );
};
