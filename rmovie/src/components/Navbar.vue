<template>

  <body>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: black; height: 70px">
        <img src="../assets/rmovieslogo.jpg" class="img-fluid" alt="Responsive image" style="padding-left: 0.5%" />

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav navbar-nav" style="font-size: 17px; margin-left: 20px">
            <li class="nav-item">
              <router-link class="nav-link" to="/" style="margin-right: 15px" id="nav1">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/random" style="margin-right: 15px" id="nav1">Random Movie</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/about" id="nav1">About Us</router-link>
            </li> -->
          </ul>
        </div>
        <!-- <nav class="navbar navbar-light" style="margin-right: 20px; background-color: black">
          <form class="form-inline">
            <div class="input-group">
              <input class="form-control mr-sm-2" type="search" placeholder="Movie Search" aria-label="Search" v-model="search"/>
              <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">
                Search
              </button>
            </div>
          </form>
        </nav> -->
        <!-- ไอเหื้ยจีน -->
        
        <router-link class="btn btn-primary" style="margin-right: 10px;" to="/user" v-if="auth">{{ this.$users.user_name }}</router-link>
        <button @click="logout()" type="button" style="margin-right: 20px;" class="btn btn-danger" v-if="auth">Logout</button>
        <!-- ไอเหื้ยจีน -->
        
        <button type="button" v-if="!auth" class="btn btn-outline-light" data-bs-toggle="modal"
          data-bs-target="#loginModal" style="margin-right: 20px">
          LOGIN
        </button>
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" style="max-width: 350px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Sign in</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>

                  <div class="mb-3 justify-content-end">
                    <label class="col-form-label d-flex" v-if="email_check == null"
                      for="defaultForm-email">Email</label>
                    <label class="col-form-label d-flex danger" style="color:red" v-if="email_check != null"
                      for="defaultForm-email">{{ email_check }}</label>
                    <input type="email" id="defaultForm-email" class="form-control validate" v-model="email"
                      placeholder="Your email..." />
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label d-flex" v-if="password_check == null"
                      for="defaultForm-pass">Password</label>
                    <label class="col-form-label d-flex danger" style="color:red" v-if="password_check != null"
                      for="defaultForm-email">{{ password_check }}</label>
                    <input type="password" id="defaultForm-pass" class="form-control validate" v-model="password"
                      placeholder="Your password..." />
                  </div>
                  <button type="button" class="mb-1 mt-3 btn btn-warning" style="color: white; width: 100%"
                    @click="login()">
                    Login
                  </button>
                </form>
              </div>
              <div class="modal-footer justify-content-center">
                <div class="signup-section">
                  Not a member yet?
                  <a href="#signup" class="text-info" data-bs-toggle="modal" data-bs-target="#signup">Sign
                    Up</a>.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <button type="button" v-if="!auth" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#signup"
          style="margin-right: 20px">
          Sign Up
        </button> -->

        <div class="modal fade" ref="signup" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel2"
          aria-hidden="true">
          <div class="modal-dialog" style="max-width: 450px">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel2">Sign up</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-2">
                    <label v-if="first_name_check == null" class="col-form-label d-flex"
                      for="defaultForm-firstname">Firstname</label>
                    <label class="col-form-label d-flex" style="color:red"
                      for="defaultForm-firstname">{{ first_name_check }}</label>
                    <input type="text" id="defaultForm-firstname" class="form-control validate" v-model="first_name"
                      placeholder="Your Firstname..." />
                  </div>
                  <div class="mb-2">
                    <label v-if="last_name_check == null" class="col-form-label d-flex"
                      for="defaultForm-lastname">Lastname</label>
                    <label class="col-form-label d-flex" style="color:red"
                      for="defaultForm-firstname">{{ last_name_check }}</label>
                    <input type="text" id="defaultForm-lastname" class="form-control validate" v-model="last_name"
                      placeholder="Your Lastname..." />
                  </div>
                  <div class="mb-2">
                    <label v-if="username_check == null" class="col-form-label d-flex"
                      for="defaultForm-nickname">Username</label>
                    <label class="col-form-label d-flex" style="color:red"
                      for="defaultForm-firstname">{{ username_check }}</label>

                    <input type="text" id="defaultForm-nickname" class="form-control validate" v-model="username"
                      placeholder="Your Lastname..." />
                  </div>
                  <div class="mb-2">
                    <label v-if="email_check == null" class="col-form-label d-flex"
                      for="defaultForm-email">Email</label>
                    <label class="col-form-label d-flex" style="color:red"
                      for="defaultForm-firstname">{{ email_check }}</label>
                    <input type="email" id="defaultForm-email" class="form-control validate" v-model="email"
                      placeholder="Your email..." />
                  </div>
                  <div class="mb-2">
                    <label v-if="mobile_check == null" class="col-form-label d-flex"
                      for="defaultForm-email">Mobile</label>
                    <label class="col-form-label d-flex" style="color:red"
                      for="defaultForm-firstname">{{ mobile_check }}</label>
                    <input type="mobile" id="defaultForm-email" class="form-control validate" v-model="mobile"
                      placeholder="Your mobile..." />
                  </div>
                  <div class="mb-2">
                    <label v-if="password_check == null" class="col-form-label d-flex"
                      for="defaultForm-pass">Password</label>
                    <label class="col-form-label d-flex" style="color:red"
                      for="defaultForm-firstname">{{ password_check }}</label>
                    <input type="password" id="defaultForm-pass" class="form-control validate" v-model="password"
                      placeholder="Your password..." />
                  </div>
                  <div class="mb-2">
                    <label v-if="repassword_check == null" class="col-form-label d-flex"
                      for="defaultForm-pass">Repeat Password</label>
                    <label class="col-form-label d-flex" style="color:red"
                      for="defaultForm-firstname">{{ repassword_check }}</label>
                    <input type="password" id="defaultForm-pass" class="form-control validate" v-model="repassword"
                      placeholder="Your password..." />
                  </div>


                  <div class="mb-2">
                    <label v-if="date_check == null" class="col-form-label d-flex"
                      for="defaultForm-date">Birthday</label>
                    <label class="col-form-label d-flex" style="color:red"
                      for="defaultForm-firstname">{{ date_check }}</label>
                    <date-picker v-model="date" valueType="date" id="defaultForm-date" style="width: 100%"
                      placeholder="Select date..."></date-picker>
                  </div>
                  <button type="button" class="mb-1 mt-3 btn btn-warning" style="color: white; width: 100%"
                    @click="submit()">
                    Sign up
                  </button>
                </form>
              </div>
              <div class="modal-footer justify-content-center">
                <div class="signup-section">
                  Already a member?
                  <a href="#loginModal" class="text-info" data-bs-toggle="modal" data-bs-target="#loginModal">Sign
                    in</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </body>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import { jwtDecode } from "./jwt-decode.js";
export default {
  components: { DatePicker },
  data() {
    return {
      date: null,
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      repassword:"",
      mobile: "",
      auth: false,

      date_check: null,
      username_check: null,
      email_check: null,
      first_name_check: null,
      last_name_check: null,
      password_check: null,
      repassword_check: null,
      mobile_check: null,

      
    };
  },
  methods: {
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    submit() {

      this.username_check = this.username == '' ? 'กรุณากรอก username' : null
      this.email_check = this.email == '' ? 'กรุณากรอก email' : null
      this.first_name_check = this.first_name == '' ? 'กรุณากรอกชื่อ' : null
      this.last_name_check = this.last_name == '' ? 'กรุณากรอกนามสกุล' : null
      this.password_check = this.password == '' ? 'กรุณากรอกรหัสผ่าน' : null
      this.date_check = this.date == null ? 'กรุณาเลือกวันเกิด' : null
      this.email_check = !this.validateEmail(this.email) ? 'กรุณากรอก Email ให้ถูกต้อง' : null
      this.mobile_check = (((isNaN(this.mobile) && !(this.mobile.length == 10))) || isNaN(this.mobile) || this.mobile == '') ? 'กรุณากรอกเบอร์ให้ถูกต้อง' : null
      this.repassword_check = this.repassword == this.password ? null : "รหัสผ่านไม่ตรงกัน" 
      if(this.username_check == null && this.email_check == null && this.first_name_check == null && this.last_name_check == null && this.password_check == null && this.date_check == null && this.email_check == null && this.mobile_check == null){
      axios
        .post(process.env.VUE_APP_HOST + "users", {
          user_name: this.username,
          user_email: this.email,
          user_password: this.password,
          user_mobile: this.mobile,
          user_firstname: this.first_name,
          user_lastname: this.last_name,
          user_birthday: this.date,
        })
        .then((res) => {
          this.$accessToken = res.data.accessToken;
          this.$cookies.set("refresh_token", res.data.refreshToken);
          this.checkLogin()
          alert("สมัครสมาชิกสำเร็จ");
          
          this.username = "";
          this.email = "";
          this.password = "";
          this.mobile = "";
          this.first_name = "";
          this.last_name = "";
          this.date = "";
          this.repassword = '';
          this.auth =true
        })
        .catch((error) => {
          alert(error.response.data.error);
          console.log(error.response.data.error)
        });}
    },
    login() {
      this.email_check = null
      this.password_check = null
      if (this.email == '') {
        this.email_check = 'กรุณากรอก Email'
      }if (this.password == '') {
        this.password_check = 'กรุณากรอก Password'
      }
      else if (this.password_check == null && this.email_check == null) {
            console.log("======== login")

        axios
          .post(process.env.VUE_APP_HOST + "auth/login", {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            this.$cookies.set("refresh_token", res.data.tokens.refreshToken);
            this.$accessToken = res.data.tokens.accessToken;
            this.$users = jwtDecode(this.$accessToken);
            console.log(this.$users);
            this.email = "";
            this.password = "";
            alert("ล็อคอินสำเร็จ");
            this.auth = true;
          }).catch((error) => {
            console.log("error login")
            console.log(error)
            this.password = '';
            alert("Email หรือ รหัสผ่านไม่ถูกต้อง")
          });
      }
      // axios.get(process.env.VUE_APP_HOST+'users', {
      // headers: {
      //    'Authorization': `Bearer ${this.$accessToken}`
      //   }}
      // ).then((res)=>{
      //   console.log(res.data)
      // }).catch(error => {console.log(error)})
      // }

      //
    },
    checkLogin() {
      if(this.$cookies.get("refresh_token") != null){
      axios
        .get(process.env.VUE_APP_HOST + "auth/refresh_token", {
          headers: {
            Authorization: `Bearer ${this.$cookies.get("refresh_token")}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.$accessToken = res.data.accessToken;
            this.$cookies.set("refresh_token", res.data.refreshToken);
            this.$users = jwtDecode(res.data.accessToken);
            this.auth = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });}
    },
    logout() {
      this.auth = false;
      this.$accessToken = "";
      this.$cookies.remove("refresh_token");
    },

  },
  created() {
    this.checkLogin();
  },
};
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
</script>

<style scoped>
.all {
  width: 100%;
}
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
}
#nav1:hover {
  font-weight: 600;
  color: white;
}
.active {
  font-size: 50%;
}
</style>
