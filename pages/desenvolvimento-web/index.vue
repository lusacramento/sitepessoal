<template>
  <div>
    <UnderConstruction />
    <p>
      Cria do bairro Novo Glória, região noroeste (NO3) da cidade de Belo
      Horizonte, <strong>Lu Sacramento</strong> iniciou sua trajetória musical
      ouvindo músicas populares antigas. Adorava colocar pra tocar vinis e fitas
      k7 de sua avó: Serestas, boleros, chorinhos, sambas... Nelson Gonçalves,
      Pixinguinha e Adoniram Barbosa foram alguns dos compositores do qual seu
      ouvido, já captava o interesse pela música.
    </p>
  </div>
</template>

<script>
import UnderConstruction from '~/components/UnderConstruction.vue'
export default {
  name: 'DesenvolvedorWeb',

  components: {
    UnderConstruction,
  },
  layout: 'pages',
  data() {
    return {
      title: 'Desenvolvimento Web',
    }
  },

  created() {
    this.$bus.$emit('props', {
      title: this.title,
    })
  },
}
</script>

<style></style>
