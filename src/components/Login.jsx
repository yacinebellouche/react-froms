import CustomInput from "./CustomInput";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useValidate } from "../hooks/useValidate";
export default function Login() {
  //We can also use Refs, we use validating upon submission ( the only downside of using Refs is resetting the values, it is not recommended to manipulate the doms from react )
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useValidate("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useValidate("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();


    if(emailHasError || passwordHasError){
      return;
    }
    console.log("email :"+ emailValue);
    console.log("password :"+ passwordValue);
    //allows to reset
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <CustomInput
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailHasError && "Please enter a valid email!"}
        />
        <CustomInput
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
