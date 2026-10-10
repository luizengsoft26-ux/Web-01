
let filmes = [
    { titulo: "Invocação do Mal", ano: 2013, genero: "Sobrenatural", nota: 7.5, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvGVoUKansANIS_EiAg6hjFz5-0SS5KjaV-3tTk6PKI3JXagfSWYQ4EY&s=10" },
    { titulo: "O Iluminado", ano: 1980, genero: "Psicológico", nota: 8.4, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUqftDHWN4NeaFr6E-I_hpU8t8mPRB6o_MD37Dop60A&s=10" },
    { titulo: "Alien, o 8º Passageiro", ano: 1979, genero: "Ficção/Terror", nota: 8.5, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOm5hp2siQ4e2sbF8Y2M3IyI_vapl0xVFUMK577r223g&s=10" },
    { titulo: "Halloween: A Noite do Terror", ano: 1978, genero: "Slasher", nota: 7.7, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94f7qoVZ3L8eocvSUAUkUzH_ynRdZeD-Nx7Q2sCC1Jg&s=10" },
    { titulo: "Brinquedo Assassino", ano: 1988, genero: "Slasher", nota: 6.6, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOuJewk0b-kdV8iraJp73ZqkcWgYkIAEwIueCEpaIx6A&s=10" },
    { titulo: "Invocação do Mal 2", ano: 2016, genero: "Sobrenatural", nota: 7.3, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvo5FUQxsBiNbQtqXm-S7hqsyyyHp4SZQK8n9Gknf58g&s=10" },
    { titulo: "Poltergeist: O Fenômeno", ano: 1982, genero: "Sobrenatural", nota: 8.3, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJM5ZHBj1sQajP477FNGWCmdiR2FIy7NmO3KN6hF40Q&s=10" },
    { titulo: "O Grito", ano: 2004, genero: "Sobrenatural", nota: 5.9, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxpVz8MwLMDs8BVeP4rFHJxQC1dZGtkn-PPHY5zwl1g&s=10" }
];

let favoritos = [];

function mostrarFilmes(lista) {
    const catalogoDiv = document.getElementById("catalogo");
    const contadorSpan = document.getElementById("contador");

    catalogoDiv.innerHTML = "";
    if (lista.length === 0) {
        catalogoDiv.innerHTML = `<div class="mensagem-vazia">Nenhum filme encontrado.</div>`;
        contadorSpan.textContent = `Total de filmes: 0`;
        return;
    }
    let htmlCards = "";
    for (let i = 0; i < lista.length; i++) {
        let f = lista[i];

        // Operador ternário para exibir o selo “⭐ Recomendado” para notas >= 8
        let seloRecomendado = f.nota >= 8 ? `<span class="selo-recomendado">⭐ Recomendado</span>` : '';

        htmlCards += `
            <div class="filme-card">
                <img src="${f.poster}" alt="${f.titulo}" class="filme-poster" onerror="this.src='https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&auto=format&fit=crop&q=80'">
                <div class="filme-info">
                    <a href="#" class="filme-titulo">${f.titulo}</a>
                    <div class="filme-detalhes">
                        <p><strong>Ano:</strong> ${f.ano}</p>
                        <p><strong>Gênero:</strong> ${f.genero}</p>
                        <p><strong>Nota:</strong> ${f.nota}</p>
                    </div>
                    ${seloRecomendado}
                </div>
                <button class="btn-favoritar" onclick="favoritar(${i})">♥ Favoritar</button>
            </div>
        `;
    }

    catalogoDiv.innerHTML = htmlCards;
    contadorSpan.textContent = `Total de filmes: ${lista.length}`;
}

function popularFiltroGeneros() {
    const selectGenero = document.getElementById("filtro-genero");
    let generosUnicos = [];

    for (let f of filmes) {
        if (!generosUnicos.includes(f.genero)) {
            generosUnicos.push(f.genero);
        }
    }

    for (let genero of generosUnicos) {
        let option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        selectGenero.appendChild(option);
    }
}

function configurarBusca() {
    const inputBusca = document.getElementById("busca");

    inputBusca.addEventListener("input", function () {
        let termo = inputBusca.value.toLowerCase();
        let filmesFiltrados = [];

        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].titulo.toLowerCase().includes(termo)) {
                filmesFiltrados.push(filmes[i]);
            }
        }

        mostrarFilmes(filmesFiltrados);
        document.getElementById("filtro-genero").value = "Todos";
    });
}

function configurarFiltroGenero() {
    const selectGenero = document.getElementById("filtro-genero");

    selectGenero.addEventListener("change", function () {
        let generoEscolhido = selectGenero.value;

        if (generoEscolhido === "Todos") {
            mostrarFilmes(filmes);
        } else {
            let filmesFiltrados = [];
            for (let f of filmes) {
                if (f.genero === generoEscolhido) {
                    filmesFiltrados.push(f);
                }
            }
            mostrarFilmes(filmesFiltrados);
        }
        document.getElementById("busca").value = "";
    });
}

function configurarBotaoInverter() {
    const btnInverter = document.getElementById("btn-inverter");

    btnInverter.addEventListener("click", function () {
        filmes.reverse();
        mostrarFilmes(filmes);
    });
}

function favoritar(indice) {
    let filmeSelecionado = filmes[indice];

    if (!favoritos.includes(filmeSelecionado.titulo)) {
        favoritos.push(filmeSelecionado.titulo);
        atualizarFavoritosUI();
    } else {
        alert(`O filme "${filmeSelecionado.titulo}" já está nos seus favoritos!`);
    }
}

function atualizarFavoritosUI() {
    const listaFavEl = document.getElementById("lista-favoritos");
    const contadorFavEl = document.getElementById("contador-favoritos");

    contadorFavEl.textContent = favoritos.length;

    if (favoritos.length === 0) {
        listaFavEl.innerHTML = `<li class="vazio">Nenhum filme favoritado ainda.</li>`;
        return;
    }

    let htmlFavoritos = "";
    for (let titulo of favoritos) {
        htmlFavoritos += `<li>${titulo}</li>`;
    }
    listaFavEl.innerHTML = htmlFavoritos;
}

function configurarLimparFavoritos() {
    const btnLimpar = document.getElementById("btn-limpar-favoritos");

    btnLimpar.addEventListener("click", function () {
        favoritos = [];
        atualizarFavoritosUI();
    });
}

function configurarInteracaoMouse() {
    const tituloPrincipal = document.getElementById("titulo-principal");
    const destaqueCard = document.querySelector(".destaque-card");

    tituloPrincipal.addEventListener("mouseenter", function () {
        tituloPrincipal.style.color = "#ffffff";
        tituloPrincipal.style.transform = "scale(1.03)";
        tituloPrincipal.style.transition = "all 0.3s ease";
    });

    tituloPrincipal.addEventListener("mouseout", function () {
        tituloPrincipal.style.color = "rgb(197, 5, 12)";
        tituloPrincipal.style.transform = "scale(1)";
    });

    destaqueCard.addEventListener("mouseenter", function () {
        destaqueCard.style.backgroundColor = "#1b212c";
        destaqueCard.style.boxShadow = "0 12px 30px rgba(197, 5, 12, 0.4)";
    });

    destaqueCard.addEventListener("mouseout", function () {
        destaqueCard.style.backgroundColor = "#14171f";
        destaqueCard.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    mostrarFilmes(filmes);
    popularFiltroGeneros();
    configurarBusca();
    configurarFiltroGenero();
    configurarBotaoInverter();
    configurarLimparFavoritos();
    configurarInteracaoMouse();
});