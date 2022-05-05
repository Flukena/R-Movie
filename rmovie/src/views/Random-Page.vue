<template>

  <body>
    <div class="check">
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
                  <b-input-group style="margin-bottom: 15px;" :prepend="name" class="mt-3">
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
                          <img :src="getAvata(name)" alt="avatar" width="60" height="60" />
                          <!-- <h3 class="small mb-0 ms-2">
                              {{ com.comment_by_email }}
                            </h3> -->
                          <span style="font-size: 18px"><small class="font-weight-bold text-primary">{{
                              com.comment_by_email
                          }}</small> <small class="font-weight-bold">{{ com.comment
}}</small></span>
                        </div>
                        <div class="d-flex flex-row align-items-center text-primary">
                          <!-- <b-button variant="danger" @click="deleteComment(com)">X</b-button> -->
                          <button type="button" class="btn-close" @click="deleteComment(com)"
                            aria-label="Close"></button>
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

      <div>
        <h1 style="
            color: white;
            margin-bottom: 60px;
            font-size: 50px;
            text-shadow: -5px 3px black;
          ">
          Select the type of movie you want randomly.
        </h1>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Drama" v-model="random" />
          <label class="form-check-label" for="inlineCheckbox1">Drama</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Action" v-model="random" />
          <label class="form-check-label" for="inlineCheckbox2">Action</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Romance" v-model="random" />
          <label class="form-check-label" for="inlineCheckbox2">Romance</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Fantasy" v-model="random" />
          <label class="form-check-label" for="inlineCheckbox2">Fantasy</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Thriller" v-model="random" />
          <label class="form-check-label" for="inlineCheckbox2">Thriller</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Comedy" v-model="random" />
          <label class="form-check-label" for="inlineCheckbox2">Comedy</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="War" v-model="random" />
          <label class="form-check-label" for="inlineCheckbox2">War</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Crime" v-model="random" />
          <label class="form-check-label" for="inlineCheckbox2">Crime</label>
        </div>
        <div>
          <!-- <span style="color: white">Checked names: {{ randommovies.length }}</span> -->
          <a class="btn btn-warning" href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal"
            style="color: white; width: 20%; margin-top: 60px" @click="randommovie()" v-if="random != ''">RANDOM
            MOVIE</a>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import { jwtDecode } from "../components/jwt-decode";
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
      random: [],
      randommovies: [],
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
      url_img: "",
    };
  },
  async created() {
    try {
      const res = await axios.get(process.env.VUE_APP_HOST + "get");
      this.movies = res.data;
    } catch (e) {
      console.error(e);
    }
    this.tagmovie();
    this.dramamovie();
    this.crimemovie();
    this.actionmovie();
    this.thrillermovie();
    this.adventure();
    this.fantasy();
    this.western();
    this.romance();
    this.scifi();
    this.biography();
    this.mystery();
    this.war();
    this.comedy();
  },

  updated() {
    this.checkLogin()
    if (this.$cookies.get('refresh_token') == null) {
      this.token = null
      this.user = null
    }
  },
  methods: {
    randomImg() {
      const num = Math.random();
      console.log(num)
    },
    getAvata(name) {
      return "https://avatars.dicebear.com/api/big-ears/" + name + ".svg";
    },
    addComment() {
      console.log(this.token);

      if (this.comment == "") {
        alert("กรุณาพิมพ์ข้อความ");
        return;
      } else {
        this.user = jwtDecode(this.token)
        if (this.token != null) {
          axios
            .post(
              process.env.VUE_APP_HOST + "comment/create",
              {
                movieId: this.blog.id,
                comment_by_email: this.user.user_email,
                comment: this.comment,
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
              this.user = jwtDecode(res.data.accessToken);
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
    }, tagmovie() {
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
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Thriller') {
              this.thrillers.push(movie)
            }
          });
        }
      })
      // console.log(this.dramas)
    },
    adventure() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Adventure') {
              this.adventures.push(movie)
            }
          });
        }
      })
    },
    fantasy() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Fantasy') {
              this.fantasys.push(movie)
            }
          });
        }
      })
    },
    western() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Western') {
              this.westerns.push(movie)
            }
          });
        }
      })
    },
    romance() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Romance') {
              this.romances.push(movie)
            }
          });
        }
      })
    },
    scifi() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Sci-Fi') {
              this.scifis.push(movie)
            }
          });
        }
      })
    },
    biography() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Biography') {
              this.biographys.push(movie)
            }
          });
        }
      })
    },
    mystery() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Mystery') {
              this.mysterys.push(movie)
            }
          });
        }
      })
    },
    war() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'War') {
              this.wars.push(movie)
            }
          });
        }
      })
    },
    comedy() {
      this.movies.forEach(movie => {
        if (movie.Genre != undefined) {

          (movie.Genre).forEach(element => {
            if (element == 'Comedy') {
              this.comedys.push(movie)
            }
          });
        }
      })
    },
    randommovie() {
      if (this.random != "") {
        this.movies.forEach((movie) => {
          if (movie.Genre != undefined) {
            movie.Genre.forEach((element) => {
              this.random.forEach((ran) => {
                if (element == ran) {
                  this.randommovies.push(movie);
                }
              });
            });
          }
        });
        // console.log(this.dramas)
        this.blog =
          this.randommovies[
          Math.floor(Math.random() * this.randommovies.length)
          ];
        this.comment = "";
        this.getComments();
        this.randommovies = [];
      } else {
        alert("โปรดเลือกประเภทหนัง");
      }
    }
  }
};
</script>

<style scoped>
body {
  background: url("4jjA3VXfFQhJrmTH_163714.jpg") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
}

.check {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-check-label {
  color: white;
  font-size: 25px;
  margin-left: 10px;
  margin-right: 20px;
}

.form-check-input {
  width: 30px;
  height: 30px;
}
</style>


