<template>

  <body>
    <div class="container">
      <div class="row">
        <div class="mt-5">
          <h1 class="mb-4">All Movies</h1>
          <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
            <slide class="col" v-for="(movie, index) in movies.slice(0, 15)" :key="index">
              <div class="card" id="blog" style="width: 15rem">
                <img class="card-img-top" :src="movie.image1" alt="Card image cap" style="max-height: 300px" />
                <div class="card-body">
                  <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">
                    {{ movie.title }}
                  </h1>
                  <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal"
                    class="btn btn-warning" style="color: white; width: 100%" @click="getmovie(movie)">Watch</a>
                </div>
              </div>
            </slide>
          </carousel>
        </div>

        <div class="mt-5">
          <h1 class="mb-4">Popular</h1>
          <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
            <slide class="col" v-for="(poppular, index) in poppulars" :key="index">
              <div class="card" id="blog" style="width: 15rem">
                <img class="card-img-top" :src="poppular.image1" alt="Card image cap" style="max-height: 300px" />
                <div class="card-body">
                  <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ poppular.title
                  }}</h1>
                  <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal"
                    class="btn btn-warning" style="color: white; width: 100%" @click="getmovie(poppular)">Watch</a>
                </div>
              </div>
            </slide>
          </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Drama</h1>
          <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
            <slide class="col" v-for="(drama, index) in dramas" :key="index">
              <div class="card" id="blog" style="width: 15rem">
                <img class="card-img-top" :src="drama.image1" alt="Card image cap" style="max-height: 300px" />
                <div class="card-body">
                  <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ drama.title }}
                  </h1>
                  <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal"
                    class="btn btn-warning" style="color: white; width: 100%" @click="getmovie(drama)">Watch</a>
                </div>
              </div>
            </slide>
          </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Crime</h1>
          <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
            <slide class="col" v-for="(crime, index) in crimes" :key="index">
              <div class="card" id="blog" style="width: 15rem">
                <img class="card-img-top" :src="crime.image1" alt="Card image cap" style="max-height: 300px" />
                <div class="card-body">
                  <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ crime.title }}
                  </h1>
                  <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal"
                    class="btn btn-warning" style="color: white; width: 100%" @click="getmovie(crime)">Watch</a>
                </div>
              </div>
            </slide>
          </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Action</h1>
          <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
            <slide class="col" v-for="(action, index) in actions" :key="index">
              <div class="card" id="blog" style="width: 15rem">
                <img class="card-img-top" :src="action.image1" alt="Card image cap" style="max-height: 300px" />
                <div class="card-body">
                  <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ action.title }}
                  </h1>
                  <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal"
                    class="btn btn-warning" style="color: white; width: 100%" @click="getmovie(action)">Watch</a>
                </div>
              </div>
            </slide>
          </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Thriller</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(thriller, index) in thrillers" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="thriller.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ thriller.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(thriller)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Adventure</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(adventure, index) in adventures" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="adventure.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ adventure.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(adventure)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Fantasy</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(fantasy, index) in fantasys" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="fantasy.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ fantasy.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(fantasy)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Sci-Fi</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(scifi, index) in scifis" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="scifi.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ scifi.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(scifi)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Biography</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(biography, index) in biographys" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="biography.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ biography.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(biography)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Mystery</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(mystery, index) in mysterys" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="mystery.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ mystery.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(mystery)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Romance</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(romance, index) in romances" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="romance.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ romance.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(romance)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">War</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(war, index) in wars" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="war.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ war.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(war)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Comedy</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(comedy, index) in comedys" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="comedy.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ comedy.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(comedy)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Western</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(western, index) in westerns" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="western.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ western.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(western)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" style="max-width: 75%">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{{ blog.title }}&nbsp;</h5>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col">
                    <img class="modal-image" :src="blog.image2" alt="Card image cap" style="
                        max-height: 350px;
                        min-height: 350px;
                        min-width: 650px;
                        max-width: 650px;
                      " />
                    <p>{{ blog.crew }}</p>
                    <iframe width="650" height="350" :src="blog.trailer"></iframe>
                    <p>{{ blog.title }} Trailer</p>
                  </div>
                  <div class="col">
                    <h5 class="modal-title">{{ blog.fullTitle }}</h5>
                    <p>IMDb {{ blog.imDbRating }}/10</p>
                    <p>{{ blog.crew }}</p>
                    <p>{{ blog.storyline }}</p>
                    <h5>User Comment</h5>
                    <b-input-group style="margin-bottom: 15px;" v-if="user.user_name != null" :prepend="user.user_name"
                      class="mt-3">
                      <b-form-input v-model="comment"></b-form-input>
                      <b-input-group-append>
                        <b-button @click="addComment()" variant="outline-success">Comment</b-button>
                      </b-input-group-append>
                    </b-input-group>

                    <div class="card" style="margin-bottom: 10px" v-for="(com, index) in comments" :key="index">
                      <div class="card-body overflow-auto">
                        <!-- <p>{{ com.comment }}</p> -->
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="user d-flex flex-row align-items-center">
                            <img :src="getAvata(com.user_name)" alt="avatar" width="60" height="60" />
                            <!-- <h3 class="small mb-0 ms-2">
                              {{ com.comment_by_email }}
                            </h3> -->
                            <span style="font-size: 18px"><small class="font-weight-bold text-primary">{{ com.comment_by_email }}</small> <small class="font-weight-bold">{{ com.comment }}</small></span>
                          </div>
                          <div class="d-flex flex-row align-items-center text-primary">
                            <!-- <b-button variant="danger" @click="deleteComment(com)">X</b-button> -->
                            <button type="button" class="btn-close" @click="deleteComment(com)"  v-if="com.comment_by_email == user.user_email" aria-label="Close"></button>

                            
                          </div>
                        </div>
                      </div>
                      <template class="footer">
                        <em style="text-align: right; margin-right: 10px">Comment on {{ setTime(com.created_on) }}</em>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { jwtDecode } from "../components/jwt-decode";
import axios from "axios";
export default {
  data() {
    return {
      movies: [],
      blog: "",
      poppulars: [],
      dramas: [],
      crimes: [],
      comment: "",
      comments: [],
      actions: [],
      thrillers: [],
      adventures: [],
      romances: [],
      fantasys: [],
      westerns: [],
      scifis: [],
      biographys: [],
      mysterys: [],
      wars: [],
      comedys: [],
      token: "",
      user: "",
      name: "",
    };
  },
  async created() {
    try {
      const res = await axios.get(process.env.VUE_APP_HOST + 'get');
      this.movies = res.data;
    } catch (e) {
      console.error(e);
    }
    this.tagmovie()
    this.dramamovie()
    this.crimemovie()
    this.actionmovie()
    this.thrillermovie()
    this.adventure()
    this.fantasy()
    this.western()
    this.romance()
    this.scifi()
    this.biography()
    this.mystery()
    this.war()
    this.comedy()
},

  updated() {
    if (this.$cookies.get('refresh_token') == null) {
      this.token = null
      this.user = null
    }
  },
  methods: {
    getAvata(name) {
      return "https://avatars.dicebear.com/api/big-ears/" + name + ".svg";
    },
    addComment() {
      this.checkLogin();
      if (this.comment == "") {
        alert("กรุณาพิมพ์ข้อความ");
        return;
      } else {
        this.user = jwtDecode(this.token)
        if (this.$cookies.get('refresh_token') != null) {
        this.user = jwtDecode(this.$cookies.get('refresh_token'))

        }

        console.log(this.user)
        if (this.token != null) {
          axios
            .post(
              process.env.VUE_APP_HOST + "comment/create",
              {
                movieId: this.blog.id,
                comment_by_email: this.user.user_email,
                comment: this.comment,
                user_name: this.user.user_name
              },
              {
                headers: {
                  Authorization: `Bearer ${this.token}`,
                },
              }
            )
            .then((res) => {
              if (res) {
                this.getComments();
                alert("บันทึกข้อความสำเร็จ");
              }
            })
            .catch((error) => {
              alert(error);
              console.log(error);
            });
        } else {
          alert("กรุณา login")
        }
      }
    },
    deleteComment(com) {
      console.log(process.env.VUE_APP_HOST + 'comment/' + com.comment_id + '/' + this.user.user_email)
      axios.delete(process.env.VUE_APP_HOST + 'comment/' + com.comment_id + '/' + this.user.user_email, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }).then((res) => {
        alert(res.data)
        this.getComments()
      }).catch(error => alert("ไม่สามารถลบได้"))
    },

    getComments() {
      axios
        .get(process.env.VUE_APP_HOST + `comment/${this.blog.id}`)
        .then((res) => {
          this.comments = res.data;
        })
        .catch((error) => console.log(error));
    },
    checkLogin() {
      if (this.$cookies.get("refresh_token") != null) {
        axios
          .get(process.env.VUE_APP_HOST + "auth/refresh_token", {
            headers: {
              Authorization: `Bearer ${this.$cookies.get("refresh_token")}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.token = res.data.accessToken;
              this.$cookies.set("refresh_token", res.data.refreshToken);
              this.user = jwtDecode(res.data.refreshToken);
              this.name = this.user.user_name;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }

    },
    setTime(time) {
      var day = time.split('T')[0]
      var t = time.split('T')[1].split('.')[0]
      return day + " " + t
    },

    getmovie(movie) {
      this.comment = "";
      this.blog = movie;
      this.getComments();
      var token = this.$cookies.get('refresh_token')
      if (token != null) {
        this.user = jwtDecode(token)
      }
    },
    tagmovie() {
      this.poppulars = this.movies.filter(movie => {
        if ((parseInt(movie.imDbRatingCount)) > 1300000) {
          return movie
        }
      })
    },
    dramamovie() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Drama') {
              this.dramas.push(movie)
            }
          });
        }
      })
      // console.log(this.dramas)
    },
    crimemovie() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Crime') {
              this.crimes.push(movie)
            }
          });
        }
      })
      // console.log(this.dramas)
    },
    actionmovie() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Action') {
              this.actions.push(movie)
            }
          });
        }
      })
      // console.log(this.dramas)
    this.checkLogin()
  },
  thrillermovie() {
        this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Thriller'){
            this.thrillers.push(movie)
          }
        });
          }
        })
      // console.log(this.dramas)
    },
    adventure() {
      this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Adventure'){
            this.adventures.push(movie)
          }
        });
          }
        })
    },
    fantasy() {
      this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Fantasy'){
            this.fantasys.push(movie)
          }
        });
          }
        })
    },
    western() {
      this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Western'){
            this.westerns.push(movie)
          }
        });
          }
        })
    },
    romance() {
      this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Romance'){
            this.romances.push(movie)
          }
        });
          }
        })
    },
    scifi() {
      this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Sci-Fi'){
            this.scifis.push(movie)
          }
        });
          }
        })
    },
    biography() {
      this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Biography'){
            this.biographys.push(movie)
          }
        });
          }
        })
    },
    mystery() {
      this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Mystery'){
            this.mysterys.push(movie)
          }
        });
          }
        })
    },
    war() {
      this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'War'){
            this.wars.push(movie)
          }
        });
          }
        })
    },
    comedy() {
      this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Comedy'){
            this.comedys.push(movie)
          }
        });
          }
        })
    }
  },
};
</script>

<style scoped>
body {
  width: 100%;
  background-color: rgb(0, 0, 0);
}

#blog:hover {
  background-color: #ffe880;
}

.mb-4 {
  text-align: left;
  color: white;
}
</style>
