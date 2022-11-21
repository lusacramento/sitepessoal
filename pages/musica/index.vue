<template>
  <div id="#music-page">
    <p>
      Cria do bairro Novo Glória, região noroeste (NO3) da cidade de Belo
      Horizonte, <strong>Lu Sacramento</strong> iniciou sua trajetória musical
      ouvindo músicas populares antigas. Adorava colocar pra tocar vinis e fitas
      k7 de sua avó: Serestas, boleros, chorinhos, sambas... Nelson Gonçalves,
      Pixinguinha e Adoniram Barbosa foram alguns dos compositores do qual seu
      ouvido, já captava o interesse pela música.
    </p>
    <p>
      Aos 14 anos, começou seus estudos autodidaticamente quando ganhou seu
      primeiro instrumento: um cavaquinho. Estudou percussão, canto, teatro e
      improvisação no Centro Cultural Tambolelê. Em 2005, na vontade de estudar
      o novo instrumento que adquiriu, um violão, recorreu ao conservatório da
      <a
        href="https://feabh.org.br/"
        rel="noopener noreferrer nofollow"
        target="_blank"
        >FEA – Fundação de Educação Artística</a
      >
      ,onde ingressou como bolsista através de uma bolsa social, isentando-o de
      mensalidades. Lá, estudou violão clássico e teoria musical. Por
      consequência, abriu possibilidades a recitais e apresentações solo e/ou
      conjunto (bandas) em espaços públicos, eventos, festas particulares e
      barzinhos bem como as primeiras composições e arranjos.
    </p>
    <p>
      Das experiências criativas, veio o despertar por uma maior atuação na área
      da escrita musical, do qual buscou o título de bacharel em composição na
      <a
        href="https://musica.ufmg.br/"
        rel="noopener noreferrer nofollow"
        target="_blank"
        >Escola de Música da Universidade Federal de Minas Gerais (UFMG)</a
      >
      .
    </p>
    <p>
      Desde 2006, Lu Sacramento atua na área educacional como oficineiro e
      professor. Trabalhou em escolas públicas, instituições e projetos
      culturais, a destacar a
      <a
        href="https://prefeitura.pbh.gov.br/fundacao-municipal-de-cultura/escola-livre-de-artes"
        rel="noopener noreferrer nofollow"
        target="_blank"
        >Escola Livres de Artes – Arena da Cultura</a
      >
      , ministrando aulas de violão, musicalização e coordenando os arranjos do
      Arena Instrumental e a Camerata de Violões. Também nesta área, trabalhou
      como coordenador cultural na
      <a
        href="https://www.portal.contagem.mg.gov.br/portal/secretarias/33/secretaria-municipal-de-cultura"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        Secretaria Municipal de Cultura, Esporte e Juventude, município de
        Contagem </a
      >.
    </p>
    <p>
      Como compositor e instrumentista, participou de vários festivais como a
      <a
        href="https://prefeitura.pbh.gov.br/fundacao-municipal-de-cultura/festivais/viradacultural"
        rel="noopener noreferrer nofollow"
        target="_blank"
        >Virada Cultural de Belo Horizonte</a
      >,
      <a
        href="https://www.ufmg.br/cultura/index.php?option=com_content&amp;view=article&amp;id=1985&amp;Itemid=121"
        rel="noopener noreferrer nofollow"
        target="_blank"
        >Festival de Inverno da UFMG</a
      >
      e
      <a
        href="https://www.instagram.com/f5_festival/"
        rel="noopener noreferrer nofollow"
        target="_blank"
        >Festival Independente de Contagem</a
      >. Também é organizador do projeto
      <a
        href="https://www.instagram.com/sururu.formado/"
        rel="noopener noreferrer nofollow"
        target="_blank"
        >Sururu Formado</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: 'MusicoCompositorEProfessor',
  layout: 'pages',

  data() {
    return {
      title: 'Música',
    }
  },

  created() {
    this.$bus.$emit('props', {
      title: this.title,
    })
  },
}
</script>

<style>
/* MEDIA QUERY NOTE */
@media (min-width: 991.96px) {
  #music-page {
    width: 95vw;
    height: 85vh;
  }
}

/* MEDIA QUERY MOBILE */
@media (max-width: 991.98px) {
  #music-page {
    width: 90vw;
  }
}
</style>
