/*Contador do Ano do Copyright*/
function timeAno() {
  const dataAno = new Date();
  const ano = dataAno.getFullYear();
  document.getElementById('rodape').innerText = `© Copyright ${ano}`;
  setTimeout(timeAno, 500);
}
timeAno();

/*Textos da Pagina em EN*/
const h5 = document.getElementById('alb-textos-home-eng');
const textos = ['C# & JAVASCRIPT PROGRAMMER', 'SQL SERVER, POSTGRESQL & ORACLE DATABASES', 'FRONT-END ANGULAR'];

function escrever(str, done) {
  const chars = str.split('').reverse();
  const typer = setInterval(() => {
    if (!chars.length) {
      clearInterval(typer);
      return setTimeout(done, 500);
    }
    const next = chars.pop();
    h5.innerHTML += next;
  }, 100);
}

function limpar(done) {
  const chars = h5.innerHTML;
  let nr = chars.length;
  const typer = setInterval(() => {
    if (nr-- === 0) {
      clearInterval(typer);
      return done();
    }
    h5.innerHTML = chars.slice(0, nr);
  }, 100);
}

function rodape(conteudos, el) {
  let atual = -1;
  function prox(cb) {
    if (atual < conteudos.length - 1) {
      atual++;
    } else {
      atual = 0;
    }
    const str = conteudos[atual];
    escrever(str, () => {
      limpar(prox);
    });
  }
  prox(prox);
}
rodape(textos);

/*Textos da pagina em PT*/
const h5Pt = document.getElementById('alb-textos-home-pt');
const textosPt = ['PROGRAMADOR C# & JAVASCRIPT', 'BANCO DE DADOS SQL SERVER, POSTGRESQL & ORACLE', 'FRONT-END ANGULAR'];

function escreverPt(str, done) {
  const chars = str.split('').reverse();
  const typer = setInterval(() => {
    if (!chars.length) {
      clearInterval(typer);
      return setTimeout(done, 500);
    }
    const next = chars.pop();
    h5Pt.innerHTML += next;
  }, 100);
}

function limparPt(done) {
  const chars = h5Pt.innerHTML;
  let nr = chars.length;
  const typer = setInterval(() => {
    if (nr-- === 0) {
      clearInterval(typer);
      return done();
    }
    h5Pt.innerHTML = chars.slice(0, nr);
  }, 100);
}

function rodapePt(conteudos, el) {
  let atual = -1;
  function prox(cb) {
    if (atual < conteudos.length - 1) {
      atual++;
    } else {
      atual = 0;
    }
    const str = conteudos[atual];
    escreverPt(str, () => {
      limparPt(prox);
    });
  }
  prox(prox);
}
rodapePt(textosPt);

/*
function barra() {
  const navBarAlb = document.getElementById('navbar-alb');
  const pixelsAmount = 50;
 
  window.addEventListener('scroll', () => {
    if (window.scrollY > pixelsAmount) {
      navBarAlb.style.backgroundColor = 'rgba(0, 0, 0, 0.900)';
      navBarAlb.style.borderBlockEndColor = '#00BAE4';
      navBarAlb.style.borderBlockEndStyle = 'solid';
      navBarAlb.style.borderBlockEndWidth = '1px';
    } else {
      navBarAlb.style.backgroundColor = 'transparent';
      navBarAlb.style.borderBlockEndColor = 'transparent';
      navBarAlb.style.borderBlockEndStyle = 'solid';
      navBarAlb.style.borderBlockEndWidth = '0px';
    }
  });
}
barra();
*/