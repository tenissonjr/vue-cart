import { defineStore } from 'pinia'

export const pesquisaStore = defineStore('pesquisaVisitantesEntradas', {
  state: () => ({
    listaVisitantesEntrasdas: [],
    nomeVisitante: 'Fulano',
    numDocumentoVisitante: '563.734.491-49',
    nextId:0
  }),
  getters: {
    getListaVisitantesEntrasdas(state) {
      return state.listaVisitantesEntrasdas
    },
    getNomeVisitante(state) {
      return state.nomeVisitante
    },
    getNumDocumentoVisitante(state) {
        return state.numDocumentoVisitante
      },
  },
  actions: {
    actionPesquisar() {
      this.listaVisitantesEntrasdas.push({ id : this.nextId++ , nomeVisitante : this.nomeVisitante })
    },
  },
})