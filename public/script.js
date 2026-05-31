/*Botões de exploração*/
const explorar = [

  {
    id: 1,
    titulo: "Biografia Completa",
    descricao:
      "A trajetória profissional e literária completa",
    botao:
      "Ler mais →",
    classe:
      "biografia",
    icone:
      "img/personagem.png"
  },

  {
    id: 2,
    titulo: "Obras em Destaque",
    descricao:
      "Conheça os livros mais aclamados e premiados",
    botao:
      "Ver obras →",
    classe:
      "obras",
    icone:
      "img/obra.png"
  },

  {
    id: 3,
    titulo: "História de Vida",
    descricao:
      "A jornada pessoal que inspirou suas obras",
    botao:
      "Descobrir →",
    classe:
      "historia",
    icone:
      "img/historia.png"
  },

  {
    id: 4,
    titulo: "Frases Marcantes",
    descricao:
      "Citações e pensamentos que marcaram gerações",
    botao:
      "Explorar →",
    classe:
      "frases",
    icone:
      "img/aspas.png"
  }

];

const botoesContainer =
  document.getElementById(
    "botoes-container"
  );

if (botoesContainer) {
  explorar.forEach(item => {
    botoesContainer.innerHTML += `
            <section>
                <a href="detalhes.html?id=${item.id}"            class="botao ${item.classe}">   
                <img src="${item.icone}" class="icone">  
                <div class="texts">           
                    <h2>
                        ${item.titulo}
                    </h2>
                    <p>
                        ${item.descricao}
                        <br><br>
                        <b>
                            ${item.botao}
                        </b>
                    </p>
                    </div>  
                </a>
            </section>
        `;
  });
}


/* Detalhes */
const detalhes = [
  {
    id: 1,
    titulo: "Biografia Completa",
    conteudo: {
      inicio:
        "Rhonda Byrne nasceu em 12 de março de 1951, em Melbourne, na Austrália. Antes de se tornar escritora, construiu sua carreira como produtora de televisão, atuando em diversos projetos no setor audiovisual australiano.",
      transformacao:
        "Por volta de 2004, Byrne enfrentou um período difícil em sua vida pessoal e profissional. Durante esse momento, teve contato com livros e ensinamentos sobre pensamento positivo e filosofia espiritual, o que despertou seu interesse por temas ligados ao poder da mente.",
      sucesso:
        "Em 2006, lançou o documentário O Segredo, que rapidamente ganhou destaque mundial. A obra apresenta a ideia da “lei da atração”, defendendo que pensamentos e emoções influenciam diretamente a realidade. No mesmo ano, o livro baseado no documentário foi publicado e se tornou um best-seller internacional.",
      outrasObras:
        "Após o sucesso inicial, Rhonda Byrne continuou desenvolvendo livros voltados ao crescimento pessoal, como O Poder (2010), A Magia (2012) e Hero (2013). Nessas obras, aprofunda conceitos como gratidão, emoções positivas e propósito de vida.",
      impactos:
        "Ao longo dos anos, Byrne se consolidou como uma das autoras mais conhecidas do gênero de autoajuda. Seus livros foram traduzidos para diversos idiomas e alcançaram milhões de leitores ao redor do mundo, influenciando pessoas a refletirem sobre suas atitudes e crenças.",
      criticas:
        "Apesar do sucesso, suas ideias também recebem críticas, principalmente por não terem base científica comprovada. Alguns especialistas questionam a validade da lei da atração, apontando que fatores externos também influenciam a realidade das pessoas."
    }
  },
  {
    id: 2,
    titulo: "Obras em Destaque",
    conteudo: {
      secret: "img/thesecret.jpeg",
      descricaoSecret:
        "A obra que tornou Rhonda Byrne conhecida mundialmente. O livro apresenta a ideia da lei da atração, mostrando como pensamentos e emoções podem influenciar a realidade. Uma leitura inspiradora para quem busca mudança de mentalidade.",
      poder: "img/poder.jpeg",
      descricaoPoder:
        "Neste livro, a autora aprofunda os conceitos de O Segredo, destacando o papel das emoções e do amor como forças transformadoras. A proposta é ajudar o leitor a alinhar sentimentos e pensamentos para alcançar uma vida mais plena.",
      magia: "img/amagia.jpeg",
      descricaoMagia:
        "Uma obra prática que propõe exercícios diários focados na gratidão. Ao longo de 28 dias, o leitor é guiado a mudar sua forma de enxergar a vida, valorizando pequenas coisas e criando hábitos positivos.",
      hero: "img/hero.jpeg",
      descricaoHero:
        "Neste livro, histórias reais são usadas para mostrar que qualquer pessoa pode superar desafios e encontrar seu propósito. A mensagem central é sobre coragem, determinação e a jornada de autodescoberta."
    }
  },
  {
    id: 3,
    titulo: "História de Vida",
    conteudo: {
      origens:
        "Rhonda Byrne nasceu em Melbourne, na Austrália, em 1951. Cresceu em um ambiente comum, sem grande exposição pública, levando uma vida relativamente discreta durante sua juventude. Desde cedo, demonstrava interesse por comunicação e criatividade, o que mais tarde influenciaria sua carreira na produção de televisão.",
      descobertas:
        "Anos depois, já adulta, Byrne enfrentou um período de dificuldades pessoais e emocionais. Foi nesse momento que teve contato com ensinamentos antigos sobre pensamento positivo e leis universais. Essa descoberta marcou um ponto de virada em sua vida, despertando um profundo interesse por temas ligados à mente, às emoções e ao comportamento humano.",
      chamado:
        "Motivada por suas descobertas, Rhonda Byrne decidiu compartilhar esse conhecimento com o mundo. Em 2006, produziu o documentário O Segredo, que rapidamente ganhou repercussão global. O sucesso do filme levou à criação do livro com o mesmo nome, dando início à sua trajetória como escritora e consolidando seu propósito de inspirar outras pessoas.",
      atual:
        "Atualmente, Rhonda Byrne continua escrevendo e divulgando suas ideias sobre desenvolvimento pessoal. Suas obras incentivam práticas como gratidão, pensamento positivo e autoconhecimento. Ela também inspira milhões de leitores ao redor do mundo a refletirem sobre suas escolhas e a buscarem uma vida mais consciente e intencional."
    }
  },
  {
    id: 4,
    titulo: "Frases Marcantes",
    conteudo: {
      citacao1:
        "“A riqueza começa na mente. Você deve primeiro acreditar que merece prosperar.”",
      fonte1: "O Segredo",
      citacao2:
        "“Quando você se sente bem com o dinheiro, mais dinheiro vem até você.”",
      fonte2: "O Poder",
      citacao3:
        "“O amor é a maior força do universo, e tudo responde a ele.”",
      fonte3: "O Poder",
      citacao4:
        "“Aquilo que você dá em amor, retorna multiplicado.”",
      fonte4: "O Segredo",
      citacao5:
        "“Seu corpo responde a cada pensamento que você tem.”",
      fonte5: "O Segredo",
      citacao6:
        "“A mente tem um poder profundo sobre o corpo, e pensamentos positivos podem contribuir para o bem-estar.”",
      fonte6: "Inspirado nos ensinamentos de O Segredo",
      citacao7:
        "“Seus pensamentos se tornam coisas.”",
      fonte7: "O Segredo",
      citacao8:
        "“Você é o criador da sua própria realidade.”",
      fonte8: "O Segredo",
      citacao9:
        "A gratidão transforma o que temos em suficiente e mais.”",
      fonte9: "A Magia",
      citacao10:
        "Quanto mais você agradece, mais motivos para agradecer você terá.”",
      fonte10: "A Magia",
      citacao11:
        "“Você nasceu para fazer algo extraordinário.”",
      fonte11: "Hero",
      citacao12:
        "“Siga aquilo que faz seu coração vibrar.”",
      fonte12: "Hero"
    }
  },

];

const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get("id"));

const detalhe = detalhes.find(item => {
  return item.id === id;
});


const details = document.getElementById("detalhes-content");
if (details) {
  if (id === 1) {
    details.innerHTML = `
    <a href="index.html" class="titulo"><h1 class="inicio">Rhonda Byrne</h1></a>
<section class="pag-bio">
        <div class="bio">
            <h1>Biografia Completa</h1><br>
        </div>

        <section class="txt iv">
            <h2>Início de Vida</h2>
            <p class="margin">${detalhes[0].conteudo.inicio}</p>
        </section>

        <section class="txt momento">
            <h2>Momento de Transformação</h2>
            <p class="margin">${detalhes[0].conteudo.transformacao}</p>
        </section>

        <section class="txt sucesso">
        <h2>Sucesso de O Segredo</h2>
            <p class="margin">${detalhes[0].conteudo.sucesso}</p>
        </section>

        <section class="txt ob">
            <h2>Outras Obras</h2>
            <p class="margin">${detalhes[0].conteudo.outrasObras}</p>
        </section>

        <section class="txt impacto">
            <h2>Impactos e Influências</h2>
            <p class="margin">${detalhes[0].conteudo.impactos}</p>
        </section>

        <section class="txt criticas">
            <h2>Críticas</h2>
            <p class="margin">${detalhes[0].conteudo.criticas}</p>
        </section>
</section>

<footer>
        <h2>Redes sociais da escritora</h2>
        <div class="insta">
            <img src="img/instagram.png" height="20px">
            <p><a href="https://www.instagram.com/rhonda.byrne/" target="_blank" class="insta">@rhonda.byrne</a></p>
        </div>
        <div class="face">
            <img src="img/facebook.png" height="20px">
            <p><a href="https://www.facebook.com/thesecretrhondabyrne/about/" target="_blank" class="face">Rhonda
                    Byrne</a></p>
        </div>
        <div class="tik">
            <img src="img/tiktok.png" height="20px">
            <p><a href="https://www.tiktok.com/@rhonda_byrne" target="_blank" class="tik">@rhonda_byrne</a></p>
        </div>
        <hr>
        <p class="direitos">© 2026. Projeto acadêmico sem fins lucrativos. Este site não possui vínculo com a escritora.
        </p>
    </footer>
        `;

  } else if (id === 2) {
    details.innerHTML = `
    <a href="index.html" class="titulo"><h1 class="inicio">Rhonda Byrne</h1></a>

<section class="pag-obras">
<div class="od">
      <h1 style="font-size: 50px">Obras em Destaque</h1>
    </div>

    <div class="bordas">
      <article class="secret">
        <img src="${detalhes[1].conteudo.secret}" width="300px">
        <div class="segredo">
          <h2>The Secret - O Segredo</h2>
          <p class="margem">${detalhes[1].conteudo.descricaoSecret}</p>
        </div>
      </article><br><br>

      <article class="opoder">
        <img src="${detalhes[1].conteudo.poder}" width="300px">
        <div class="poder">
          <h2>O Poder</h2>
          <p class="margem">${detalhes[1].conteudo.descricaoPoder}</p>
        </div>
      </article><br><br>

      <article class="amagia">
        <img src="${detalhes[1].conteudo.magia}" width="300px">
        <div class="magia">
          <h2>A Magia</h2>
          <p class="margem">${detalhes[1].conteudo.descricaoMagia}</p>
        </div>
      </article><br><br>

      <article class="hero">
        <img src="${detalhes[1].conteudo.hero}" width="300px">
        <div class="heroi">
          <h2>Hero</h2>
          <p class="margem">${detalhes[1].conteudo.descricaoHero}</p>
        </div>
      </div>
      </section>

      <footer>
        <h2>Redes sociais da escritora</h2>
        <div class="insta">
            <img src="img/instagram.png" height="20px">
            <p><a href="https://www.instagram.com/rhonda.byrne/" target="_blank" class="insta">@rhonda.byrne</a></p>
        </div>
        <div class="face">
            <img src="img/facebook.png" height="20px">
            <p><a href="https://www.facebook.com/thesecretrhondabyrne/about/" target="_blank" class="face">Rhonda
                    Byrne</a></p>
        </div>
        <div class="tik">
            <img src="img/tiktok.png" height="20px">
            <p><a href="https://www.tiktok.com/@rhonda_byrne" target="_blank" class="tik">@rhonda_byrne</a></p>
        </div>
        <hr>
        <p class="direitos">© 2026. Projeto acadêmico sem fins lucrativos. Este site não possui vínculo com a escritora.
        </p>
    </footer>
      `;

  } else if (id === 3) {
    details.innerHTML = `
    <a href="index.html" class="titulo"><h1 class="inicio">Rhonda Byrne</h1></a>

    <section class="pag-his">
    <div class="his">
            <h1>História de Vida</h1><br>
        </div>

        <section class="bloco oi">
            <h2>Origens e Infância</h2>
            <p class="margin">${detalhes[2].conteudo.origens}</p>
        </section>

        <section class="bloco dt">
            <h2>Descobertas e Transformações</h2>
            <p class="margin">${detalhes[2].conteudo.descobertas}</p>
        </section>

        <section class="bloco ce">
            <h2>O Chamado da Escrita</h2>
            <p class="margin">${detalhes[2].conteudo.chamado}</p>
        </section>

        <section class="bloco vai">
            <h2>Vida Atual e Inspirações</h2>
            <p class="margin">${detalhes[2].conteudo.atual}</p>
        </section>
    </section>

    <footer>
        <h2>Redes sociais da escritora</h2>
        <div class="insta">
            <img src="img/instagram.png" height="20px">
            <p><a href="https://www.instagram.com/rhonda.byrne/" target="_blank" class="insta">@rhonda.byrne</a></p>
        </div>
        <div class="face">
            <img src="img/facebook.png" height="20px">
            <p><a href="https://www.facebook.com/thesecretrhondabyrne/about/" target="_blank" class="face">Rhonda
                    Byrne</a></p>
        </div>
        <div class="tik">
            <img src="img/tiktok.png" height="20px">
            <p><a href="https://www.tiktok.com/@rhonda_byrne" target="_blank" class="tik">@rhonda_byrne</a></p>
        </div>
        <hr>
        <p class="direitos">© 2026. Projeto acadêmico sem fins lucrativos. Este site não possui vínculo com a escritora.
        </p>
    </footer>
    `;

  } else if (id === 4) {
    details.innerHTML = `
    <a href="index.html" class="titulo"><h1 class="inicio">Rhonda Byrne</h1></a>

    <section class="pag-frases">
    <div class="fm">
            <h1>Frases Marcantes</h1>
        </div>

        <div class="secao">
            <div class="frase">
                <h2><u>Sobre Dinheiro</u></h2>
            </div>
            <section class="cards">
                <div class="card">${detalhes[3].conteudo.citacao1}<br><br>- ${detalhes[3].conteudo.fonte1}</div>

                <div class="card">${detalhes[3].conteudo.citacao2}<br><br>- ${detalhes[3].conteudo.fonte2}</div>
            </section>

            <div class="frase">
                <h2><u>Sobre Amor</u></h2>
            </div>
            <section class="cards">
                <div class="card">${detalhes[3].conteudo.citacao3}<br><br>- ${detalhes[3].conteudo.fonte3}</div>

                <div class="card">${detalhes[3].conteudo.citacao4}<br><br>- ${detalhes[3].conteudo.fonte4}</div>
            </section>

            <div class="frase">
                <h2><u>Sobre Saúde</u></h2>
            </div>
            <section class="cards">
                <div class="card">${detalhes[3].conteudo.citacao5}<br><br><br>- ${detalhes[3].conteudo.fonte5}</div>

                <div class="card">${detalhes[3].conteudo.citacao6}<br><br>- ${detalhes[3].conteudo.fonte6}</div>
            </section>

            <div class="frase">
                <h2><u>Sobre Pensamento e Mente</u></h2>
            </div>
            <section class="cards">
                <div class="card">${detalhes[3].conteudo.citacao7}<br><br>- ${detalhes[3].conteudo.fonte7}</div>

                <div class="card">${detalhes[3].conteudo.citacao8}<br><br>- ${detalhes[3].conteudo.fonte8}</div>
            </section>

            <div class="frase">
                <h2><u>Sobre Gratidão</u></h2>
            </div>
            <section class="cards">
                <div class="card">${detalhes[3].conteudo.citacao9}<br><br>- ${detalhes[3].conteudo.fonte9}</div>

                <div class="card">${detalhes[3].conteudo.citacao10}<br><br>- ${detalhes[3].conteudo.fonte10}</div>
            </section>

            <div class="frase">
                <h2><u>Sobre Propósito e Vida</u></h2>
            </div>
            <section class="cards vazio">
                <div class="card">${detalhes[3].conteudo.citacao11}<br><br>- ${detalhes[3].conteudo.fonte11}</div>

                <div class="card">${detalhes[3].conteudo.citacao12}<br><br>- ${detalhes[3].conteudo.fonte12}</div>
            </section>
        </div>
    </section>

    <footer>
        <h2>Redes sociais da escritora</h2>
        <div class="insta">
            <img src="img/instagram.png" height="20px">
            <p><a href="https://www.instagram.com/rhonda.byrne/" target="_blank" class="insta">@rhonda.byrne</a></p>
        </div>
        <div class="face">
            <img src="img/facebook.png" height="20px">
            <p><a href="https://www.facebook.com/thesecretrhondabyrne/about/" target="_blank" class="face">Rhonda
                    Byrne</a></p>
        </div>
        <div class="tik">
            <img src="img/tiktok.png" height="20px">
            <p><a href="https://www.tiktok.com/@rhonda_byrne" target="_blank" class="tik">@rhonda_byrne</a></p>
        </div>
        <hr>
        <p class="direitos">© 2026. Projeto acadêmico sem fins lucrativos. Este site não possui vínculo com a escritora.
        </p>
    </footer>
    `;
  }
}


