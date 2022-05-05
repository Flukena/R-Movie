<template>

    <body>
        <b-container>
            <b-row>
                <b-col style="margin-top: 20px">
                    <div>
                        <b-card title="Profile" body-class="text-center" header-tag="nav">
                            <template #header>
                                <b-nav card-header tabs>
                                    <b-nav-item active>Profile</b-nav-item>
                                    <!-- <b-nav-item v-if="true">Inactive</b-nav-item>
                                    <b-nav-item v-if="false" disabled>Disabled</b-nav-item> -->
                                </b-nav>
                            </template>
                            <template>
                                <div>
                                    <b-form @submit="onSubmit" @reset="onReset" v-if="true" >


                                        <b-form-group id="username" style="text-align: left; margin-bottom:2%; display:flex" label="Username:   "
                                            label-for="username"><span v-if="!edit" style="margin-left: 10px;">{{user.user_name}}</span>
                                            <b-form-input v-if="edit" id="username" v-model="form.user_name" style="margin-left: 10px"
                                                placeholder="Enter username" required></b-form-input>
                                        </b-form-group>


                                        <b-form-group id="firstname" style="text-align: left; margin-bottom:2%; display:flex" label="Firstname:"
                                            label-for="firstname"><span v-if="!edit" style="margin-left: 10px;">{{user.user_firstname}}</span>
                                            <b-form-input v-if="edit"  id="fistname" v-model="form.user_firstname" style="margin-left: 10px"
                                                placeholder="Enter Firstname" required></b-form-input>
                                        </b-form-group>


                                        <b-form-group id="Lastname" style="text-align: left; margin-bottom:2%; display:flex" label="Lastname:"
                                            label-for="Lastname"><span v-if="!edit" style="margin-left: 10px;">{{user.user_lastname}}</span>
                                            <b-form-input v-if="edit"  id="Lastname" v-model="form.user_lastname" style="margin-left: 10px"
                                                placeholder="Enter fastname" required></b-form-input>
                                        </b-form-group>

                                        <b-form-group id="mobile" style="text-align: left; margin-bottom:2%; display:flex" label="Phone:"
                                            label-for="mobile"><span v-if="!edit" style="margin-left: 10px;">{{user.user_mobile}}</span>
                                            <b-form-input v-if="edit"  id="mobile" v-model="form.user_mobile" style="margin-left: 10px"
                                                placeholder="Enter Phone" required></b-form-input>
                                        </b-form-group>

                                        <b-card class="mt-3" header="User Profile Avata">
                                        <img v-if="edit || user != ''" style="width:30%" :src="getAvata(form.user_name)">
                                        </b-card>

                                        <b-button type="submit"   v-if="edit" style="margin-top:10px" variant="primary">Submit
                                        </b-button>
                                        <b-button type="reset" v-if="!edit"  style="margin-top:10px" variant="warning">Edit</b-button>
                                        <b-button type="reset" v-if="edit" style="margin-top:10px; margin-left:15px" variant="secondary">close</b-button>
                                    </b-form>
                                    <!-- <b-card class="mt-3" header="User Profile Avata">
                                        <img v-if="edit || user != ''" style="width:30%" :src="getAvata(form.user_name)">
                                    </b-card> -->
                                </div>
                            </template>
                        </b-card>
                    </div>

                </b-col>
            </b-row>
        </b-container>
    </body>

</template>

<script>
import axios from "axios";
import { jwtDecode } from '@/components/jwt-decode';
export default {
    data() {
        return {
            form: {
                user_mobile: "",
                user_name: "",
                user_firstname: "",
                user_lastname: "",
                user_email:"",

            },
            user: "",
            edit: false

        };
    }, methods: {

        onReset(event){
            event.preventDefault()
            this.edit = !this.edit
        },
        onSubmit(event) {
            event.preventDefault()
            this.form.user_email = this.user.user_email
            console.log("----")

            axios.post(process.env.VUE_APP_HOST + "users/update", this.form).then((res) =>{
                this.$cookies.set("refresh_token", res.data.refreshToken);
                this.users = jwtDecode(res.data.accessToken);
                alert("เรียบร้อย")
                this.edit = false
                this.getUser()
            }  
            
            ).catch((error) =>{
                console.log(error)
            })

            // alert(JSON.stringify(this.form))
        },
        getAvata(name) {
      return "https://avatars.dicebear.com/api/big-ears/" + name + ".svg";
    },
        getUser(){
            var token =this.$cookies.get("refresh_token");
            if(token != null){
                this.user = jwtDecode(token)
            }
        }

    }, updated() {
        this.form
    }, created(){
        this.getUser()
        this.form.user_firstname = this.user.user_firstname
        this.form.user_lastname = this.user.user_lastname
        this.form.user_name = this.user.user_name
        this.form.user_mobile = this.user.user_mobile
    }
}
</script>