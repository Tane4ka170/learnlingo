import { useState } from "react";

export const Login = ({ handleClose }) => {
  const [emailEntered, setEmailEntered] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState(false);

  const handleSubmit = (values) => {
    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        close();
      })
      .catch((err) => {
        toast.error(" SORRY, COULDN'T FIND YOUR ACCOUNT");
      });
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Too Short!").required("Required"),
  });

  return (
    <div>
      <Title>Log In</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Text>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <FormStyle>
            <FieldStyle
              type="email"
              name="email"
              placeholder={emailEntered ? "" : "Email"}
              onFocus={() => setEmailEntered(true)}
            />
            <ErrMsg name="email" component="div" />
            <FieldStyle
              type="password"
              name="password"
              placeholder={passwordEntered ? "" : "Password"}
              onFocus={() => setPasswordEntered(true)}
            />
            <ErrMsg name="password" component="div" />
            <BtnSubmit type="submit">Log in</BtnSubmit>
          </FormStyle>
        )}
      </Formik>
      <AuthProvider handleClose={handleClose} />
    </div>
  );
};
