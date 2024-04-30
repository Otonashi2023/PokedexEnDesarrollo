<template>
    <table>
      <div class="letrero">
      <div></div>
        <div class="home">
            <img alt="Vue logo" src="../assets/pokémonlogo.png">
        </div>
        <div></div>
      </div>
        <tbody>
            <tr id="fila" v-for="pokemon in pokemones" :key="pokemon.codigo">
                <td>{{ pokemon.nombre }}</td>
            </tr>
            <router-view />
        </tbody>

    </table>
  </template>
  
  <script>
  import axios from "axios";
  //contructor de las variables
  export default {
    data(){
      return{
        pokemones:[],
        boleano:false,
      }
    },
    methods: {
        obtenerPokemones(){
          // Método para obtener la lista de usuarios
          axios.get("http://localhost:3000/api/pokemon/listar")
          .then((response)=>{
            this.pokemones= response.data;
          })
          .catch((error)=>{
            console.error("Error al obtener Pokemones: ", error);
          })
        },
      },      
      mounted(){
        //Llamar al método para obtener la lista de usuarios al cargar el componente
        this.obtenerPokemones();
      },

  }

  </script>
