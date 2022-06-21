<template>
  <form @submit.prevent="store.actionPesquisar()">


    <div>
      Nome : <input v-model="store.nomeVisitante" />
      <br>
      Documento : <input v-model="store.numDocumentoVisitante" />
    </div>

    <button type="submit">Pesquisar</button>

  <div class="container">
        <h3 class="p-3 text-center">Vue 3 - Display a list of items with v-for</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nome</th>
                </tr>  
            </thead>
            <tbody>
                <tr v-for="v in store.getListaVisitantesEntrasdas" :key="v.id">
                    <td>{{v.id}}</td>
                    <td>{{v.nomeVisitante}}</td>
                </tr>
            </tbody>
        </table>
    </div>        

  </form>
</template>

<script>
import { pesquisaStore } from '../store/pesquisaVisitantesEntradas.js'

export default {
  setup() {
    const store = pesquisaStore()

    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
}
</script>
