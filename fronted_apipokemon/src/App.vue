<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.formulario{
  display: grid;
  grid-column-gap: .1rem;
  grid-row-gap: .5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
}

.login{
  background-color: #A19F9D;
  max-width: 250px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
}

.pokebola{
  padding-top: 50px;
  padding-left: 40px;
}

button{
  color: white;
  background-color: #004AAD;
  border-radius: 5px;
}

#enlace{
  color:#004AAD;
}

body{
  background-color: #E6E6C5;
}

.aca1{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 30px;
}

.letrero{
  display: grid;
  grid-column-gap: .1rem;
  grid-row-gap: .5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
}

tbody{
  display: grid;
  grid-column-gap: .1rem;
  grid-row-gap: .1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  margin-top: 50px;
}

tr{
  border: 2px solid blue;  
}

td{
  display: flex;
  justify-content: center;
  margin: 20px;
}
header{
  display: grid;
  grid-column-gap: .1rem;
  grid-row-gap: .5rem;
  grid-template-columns: 1fr 5fr 1fr;
  grid-auto-rows: 1fr;
}
#image{
  width: auto;
}
</style>
