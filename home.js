
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth + 30; // largura do item + margem
    const track = document.querySelector('.carousel-track');
    // função para mostrar o próximo item no carrossel
    document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentIndex < totalItems - 3) { // mostra 3 itens de cada vez
    currentIndex++;
    } else {
    currentIndex = 0; // volta ao início
    }
    updateCarousel();
    });


    // função para mostrar o item anterior no carrossel
    document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentIndex > 0) {
    currentIndex--;
    } else {
    currentIndex = totalItems - 3; // vai para o último conjunto de itens
    }
    updateCarousel();
    });


    // atualiza a posição do carrossel
    function updateCarousel() {
    const distanceToMove = currentIndex * itemWidth;
    track.style.transform = `translateX(-${distanceToMove}px)`; // movimenta o carrossel
    }
            
    // adiciona um evento de clique a cada item do carrossel
    items.forEach(item => {
    item.addEventListener('click', function() {
    const page = item.getAttribute('data-page');
    if (page) {
    window.location.href = page; // redireciona para a página correspondente
    }
    });
    });

        //...............................//

    document.addEventListener("DOMContentLoaded", function() {
        function performSearch() {
            const query = document.getElementById("searchInput").value.toLowerCase();

            // mapeamento simples de páginas com base nas palavras-chave
            const pages = {
                "home": "index.html",
                "sobre": "sobre.html",
                "roteador wifi": "roteador-wifi.html",
                "cabo de rede": "cabo-rede.html",
                "cabo sata": "cabo-sata.html",
                "cabo vga": "cabo-vga.html",
                "cabo de alimentação": "cabo-alimentação.html",
                "leitor de cd": "leitor-cd.html",
                "processador": "processador.html",
                "memoria ram": "memoria-ram.html",
                "disquete": "disquete.html",
                "hd (hard disc)": "hd-Memória.html",
                "placa de vídeo": "placa-video.html",
                "raspberry": "raspberry.html",
                "placa mãe": "placa-mãe.html",
                "fonte de energia": "fonte_de_energia.html",
                "cooler": "cooler.html"
            };

            // verifica se a consulta contém palavras-chave
            for (const [key, value] of Object.entries(pages)) {
                if (key.includes(query)) {
                    window.location.href = value;
                    return;
                }
            }

            alert("Pesquise componentes do computador");
        }

        // acionar a função quando a tecla "Enter" for pressionada
        document.getElementById("searchInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                performSearch();
            }
        });
    });
