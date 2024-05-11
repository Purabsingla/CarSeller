import { Breadcrumbs } from "@material-tailwind/react";
import { IoIosArrowForward } from "react-icons/io";
function Login_1() {
  return (
    <div class="container">
      {/* <!-- Breadcumb area start --> */}
      <Breadcrumbs
        separator={
          <IoIosArrowForward className="h-4 w-4 text-black" strokeWidth={2.5} />
        }
        className="w-[99vw] bg-some p-6"
      >
        <a href="#" className="opacity-60">
          Docs
        </a>
        <a href="#" className="opacity-60">
          Components
        </a>
        <a href="#">Breadcrumbs</a>
      </Breadcrumbs>
      {/* <!--End Breadcumb area --> */}

      {/* <style type="text/css">
          .breadcrumbs {
            background-color: #ebebeb;
          }
        </style> 
        
          style="display: none"
        */}
      <div id="content" className="grid grid-cols-2 grid-rows-2">
        <div className="col-span-4 w-[99vw] p-5 text-2xl font-bold pl-20 bg-red-800">
          <h1>Account</h1>
        </div>
        <div className="bg-blue-300">
          <div class="well">
            <h2>New Customer</h2>
            <p>
              <strong>Register Account</strong>
            </p>
            <p>
              By creating an account you will be able to shop faster, be up to
              date on an order&#39;s status, and keep track of the orders you
              have previously made.
            </p>
            <br />
            <a href="register.html" id="button-account" class="btn btn-primary">
              Continue
            </a>
          </div>
        </div>
        <div>
          <div class="well">
            <h2>Returning Customer</h2>
            <p>
              <strong>I am a returning customer</strong>
            </p>
            <form
              method="post"
              action="https://t90-theme.myshopify.com/account/login"
              id="customer_login"
              accept-charset="UTF-8"
              data-login-with-shop-sign-in="true"
            >
              <input type="hidden" name="form_type" value="customer_login" />
              <input type="hidden" name="utf8" value="✓" />
              <input
                type="hidden"
                name="checkout_url"
                value="/collections/all"
              />

              <div
                class="note form-success"
                id="resetSuccess"
                // something  like style="display: none"
              >
                We&#39;ve sent you an email with a link to update your password.
              </div>
              <div class="form-group">
                <label class="control-label" for="customer_email">
                  Email
                </label>
                <input
                  type="text"
                  value=""
                  name="customer[email]"
                  id="customer_email"
                  placeholder="Email"
                  class="form-control"
                  autocorrect="off"
                  autocapitalize="off"
                  autofocus
                />
              </div>

              <div class="form-group">
                <label class="control-label" for="customer_password">
                  Password
                </label>
                <input
                  class="form-control"
                  type="password"
                  value=""
                  name="customer[password]"
                  id="customer_password"
                  placeholder="Password"
                  className="form-control"
                />
                <a
                  rel="nofollow"
                  href="#some"
                  onclick="showRecoverPasswordForm();return false;"
                >
                  Forgot your password?
                </a>
              </div>

              <p class="submit">
                <input type="submit" value="Sign In" class="btn btn-primary" />
                or
                <a class="btn-acct" href="../index.html">
                  Return to Store
                </a>
              </p>
            </form>

            <div
              id="recover_password"
              //  style="display: none"
            >
              <h3>Reset your password</h3>
              <p>We will send you an email to reset your password.</p>

              <form
                method="post"
                action="https://t90-theme.myshopify.com/account/recover"
                accept-charset="UTF-8"
              >
                <input
                  type="hidden"
                  name="form_type"
                  value="recover_customer_password"
                />
                <input type="hidden" name="utf8" value="✓" />

                <div class="form-group">
                  <label for="recover-email">Email</label>
                  <input
                    type="text"
                    value=""
                    name="email"
                    class="form-control"
                    id="recover-email"
                    placeholder="Email"
                    autocorrect="off"
                    autocapitalize="off"
                  />

                  <p class="submit lost-password form-group">
                    <button
                      class="btn btn-primary"
                      name="SubmitLogin"
                      id="button-account"
                      type="submit"
                    >
                      <span>Submit</span>
                    </button>
                    or
                    <a
                      class="btn-acct"
                      href="#"
                      onclick="hideRecoverPasswordForm();return false;"
                    >
                      Cancel
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login_1;
