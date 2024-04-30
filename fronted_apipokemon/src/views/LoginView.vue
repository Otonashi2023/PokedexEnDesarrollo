<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/pokémonlogo.png">
    </div>
  
    <div class="formulario">
      <div></div>
      <img class="pokebola" alt="Pokebola" src="../assets/pokebola.png">
      <div class="login">
        <h1>Login</h1>
        <form v-on:submit.prevent="login">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username" required v-model="username" >
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" required v-model="password">
          </div>
          <br>
          <button id="login" type="submit" name="login">Iniciar Sesion</button>
        </form>
        <p class="msg">
          ¿No tienes cuenta?
          <a id="enlace" @click="enviarAHome()">Registrarse</a>
        </p>
        <div class="alert-danger" role="alert" v-if="error">
            {{ error_msg }}
        </div>
      </div>
      <div></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  //constructor de las variables 
  export default {
    data () {
      return{
        username: "",
        password: "",
        error: false,
        error_msg: "",     
      };
    },
    //se crea el metodo para el servicio (logear)
    methods: {
      login() {
        axios
          .post('http://localhost:3000/api/usuario/login',{
            username: this.username,
            password: this.password,
          })
          .then((response)=>{
  
            if(response.data =="Inicio de sesion exitoso"){
              window.location.href='#/tablapokemones'
              console.log("Bienvenido");
              alert("¡Bienvenido "+this.username+"! " );             
            }
            else{
              this.error = true;
              this.error_msg=response.data;
              console.log(this.error_msg);
            }
  
            this.username = '';
            this.password = '';
  
          })
          .catch((error)=>{
            console.error("Error al iniciar sesion:", error);
          });
      },
      enviarAHome(){
        this.$emit('escucharLog', this.boleano=true);
      },
    }
  };
  </script>
  