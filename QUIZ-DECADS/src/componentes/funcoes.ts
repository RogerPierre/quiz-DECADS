export function digitarTextoComCursor(texto : string, containerId : string, velocidade = 50) {
    const container = document.getElementById(containerId);
    if (!container)
        return;
    container.innerHTML = ""; // Limpa o conteúdo inicial
    const cursor = document.createElement("span");
    cursor.id = "typewriter-cursor";
    container.appendChild(cursor);
    let index = 0;
    const intervalo = setInterval(() => {
        if (index >= texto.length) {
            clearInterval(intervalo);
            return;
        }
        // Inserir o caractere antes do cursor
        const char = texto[index];
        cursor.before(document.createTextNode(char));
        index++;
    }, velocidade);
}