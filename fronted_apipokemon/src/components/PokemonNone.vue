<template>
<body>
<header>
    <div class="pokedex">
        <button type="button" class="btn btn-secondary" @click="consultar">Ir a la Pokedex</button>
    </div>
    <div></div>
    <div class="aviso">
        <img src="../assets/pokémonlogo.png" alt="">
    </div>
</header>

<section>
    <div class="Bulbasaur">
        <img src="../assets/Bulbasaur - 001.png" alt="Pokemon Bulbasaur">
    </div>
    <article>
    <div class="containers">
        <h1>Bulbasaur</h1>
    </div>
    <div class="contenedor2">
        <p>Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo. </p>
    </div>
    <div class="datospokemon">
        <ul>
            <li>Categoria: Semilla</li>
            <li>Peso: 6,9kg</li>      
        </ul>
    </div>
    <div>
        Version
    </div>
</article>
<div>
  <h1>Empleado</h1>
        <br>
        <table>
              <tr><td>PS:</td>    <td>{{ puntos_estadisticos.ps }}</td></tr>
              <tr><td>Ataque:</td>    <td>{{ puntos_estadisticos.ataque  }}</td></tr>
              <tr><td>Defemsa:</td>  <td>{{ puntos_estadisticos.defensa }}</td></tr>
              <tr><td>Ataque_especial:</td>    <td>{{ puntos_estadisticos.ataque_especial }}</td></tr>
              <tr><td>Defensa_especial:</td>  <td>{{ puntos_estadisticos.defensa_especial }}</td></tr>
              <tr><td>Velocidad:</td> <td>{{ puntos_estadisticos.velocidad }}</td></tr>
              
        </table>
</div>
</section>
</body>
</template>

<script>
import axios from "axios";
//contructor de las variables 
export default {
  data() {
    return{
      //codigo: "",
      ps:"",
      ataque:"",
      defensa:"",
      ataque_especial:"",
      defensa_especial:"",
      velocidad:"",
      puntos_estadisticos:[]
    };
  },
//metodos CRUD
  methods:{
    consultar(){
      axios
        .get('http://localhost:3000/api/puntos_estadisticos/'+1)
        .then((response)=>{
          //actualiza los campos del formulario con los datos del cargo consultado
          this.ps= response.data.ps;
          this.ataque= response.data.ataque;
          this.defensa= response.data.defensa;
          this.ataque_especial= response.data.ataque_especial;
          this.defensa_especial= response.data.defensa_especial;
          this.velocidad= response.data.velocidad;
          this.puntos_estadisticos= response.data;

        })
        .catch((error) =>{
          console.error("Error al consultar cargo: ", error);
        });
        },
    },
};
</script>

<style scoped>
body{
    background-color: #E6E6C5;
}
header{
    border: solid black;
    display: grid;
    grid-column-gap: .1rem;
    grid-row-gap: .5rem;
    grid-template-columns: 1fr 3fr 1fr;
    grid-auto-rows: 1fr;
}
section{
    border: solid black;
    display: grid;
    grid-column-gap: .1rem;
    grid-row-gap: .5rem;
    grid-template-columns: 2fr 1.5fr 2fr;
    grid-auto-rows: 1fr;
}
.aviso{
    display: flex;
    width: 100px;
    height: 100px;
    justify-content: left;
    float: right;    
    margin-top: 20px;
}

.aviso img{
    flex: 1;
    text-align: right;
    margin-left: -50px;
}

.pokedex{
    margin: 100px;
    margin-top: 20px;
}

h1{
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.Bulbasaur img{
    width: 250px;
    height: 250px;
    border-radius: 5px;
    border: solid black;
    margin-left: 30px; 
}

button{
    width: 200px;
    height: 50px;
    font-size: 20px;
    border-radius: 20px;
}
article{
    border: solid black;
    display: grid;
    grid-row-gap: .1rem;
    grid-column-gap: .5rem;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
}
div{
    border:solid black
}

</style>