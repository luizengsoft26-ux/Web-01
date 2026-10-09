let filmes = [
  { titulo: "Invocação do Mal", ano: 2013, genero: "Sobrenatural", nota: 7.5, poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80" },
  { titulo: "O Iluminado", ano: 1980, genero: "Psicológico", nota: 8.4, poster: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80" },
  { titulo: "Alien, o Oitavo Passageiro", ano: 1979, genero: "Ficção científica e terror", nota: 8.5, poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80" },
  { titulo: "Halloween", ano: 1978, genero: "Slasher", nota: 7.7, poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=400&q=80" },
  { titulo: "Brinquedo Assassino", ano: 1988, genero: "Terror e suspense", nota: 6.7, poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=400&q=80" },
  { titulo: "Invocação do Mal 2: A Origem", ano: 2016, genero: "Sobrenatural", nota: 6.8, poster: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=400&q=80" },
];

const container = document.getElementById("grade-filmes");

filmes.forEach(filme => {
    container.innerHTML += `
        <div class="card-filme" style="margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
            <h2>${filme.titulo} (${filme.ano})</h2>
            <p><strong>Gênero:</strong> ${filme.genero}</p>
            <p><strong>Nota:</strong> ⭐ ${filme.nota}</p>
            <img src="${filme.poster}" alt="Poster do filme ${filme.titulo}" width="200">
        </div>
    `;
});

