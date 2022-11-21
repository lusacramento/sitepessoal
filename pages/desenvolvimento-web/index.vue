<template>
  <div>
    <!-- <UnderConstruction /> -->
    <p>
      Desde 2018, <strong>Lu Sacramento</strong> vem trabalhando com
      desenvolvimento de páginas web.
    </p>
    <p>
      Antes disso, na Área de Informática, estudou por um curto período no curso
      Bacharelado da Ciências da Computação no Centro Universitário UNI-BH
      (2004). Lá teve a possibilidade de estudar Algorítmos e Estuturas de Dados
      e a partir da linguagem <strong>Pascal</strong>.
    </p>
    <p>
      De 2006 a 2008, trabalhou como assistente de contabilidade desenvolvendo
      mini-aplicações de integração entre o software Mastermaq e Sintegra para
      geração de arquivos TXT.
    </p>
    <p>
      De 2009 a 2011, foi Gerente de TI em uma empresa de contabilidade do qual
      foi responsável por implentar toda estrutura de rede desde o cabeamento a
      configuração e manutenção de servidores baseados em
      <strong>Windows 2003 Server</strong>, bem como a manutenção das estações
      de trabalho.
    </p>
    <p>
      A partir de 2018, vem desenvolvendo sites e lojas baseados no framework
      <strong>WordPress</strong>. Entre os trabalhos, destacam-se:
      <a
        href="http://barracaodasideia.com.br"
        target="_blank"
        rel="noopener noreferrer"
        >Barracão das Ideia</a
      >
      e
      <a
        href="http://contabilidade Sacramento"
        target="_blank"
        rel="noopener noreferrer"
        >Contabilidade Sacramento</a
      >.
    </p>
    <p>
      Em 2020, inicia seus estudos em outras linguagens de programação no
      intuito de desenvolver sua primeira aplicação em produção, o
      <a href="http://cordaria.com.br" target="_blank" rel="noopener noreferrer"
        >Cordaria</a
      >
      unindo seus conhecimentos de música e programação afim de desenvolver um
      método para o treinamento de técnica de instrumentos de corda.
    </p>
    <p>Entre as tecnologias que estuda, destacamos:
      <ul>
        <li><strong>Frontend</strong>: HTML, CSS, JavaScript, Bootstrap;</li>
        <li><strong>Backend</strong>Backend: Java, SpringBoot;</li>
        <li><strong>Base de Dados</strong>: MongoDb, MySQL, MariaDb.</li>
      </ul>
    </p>
  </div>
</template>

<script>
// import UnderConstruction from '~/components/UnderConstruction.vue'
export default {
  name: 'DesenvolvedorWeb',

  components: {
    // UnderConstruction,
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
