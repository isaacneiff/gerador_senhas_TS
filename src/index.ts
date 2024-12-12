
function gerarArray(qtdeSenhas: number): string[] {
    let senhas = []
    for (let i = 0; i < qtdeSenhas; i++) {
        senhas.push(gerarSenhaASCII())
    }
     return senhas   
}

const qtdeSenhas = 5

const senhasNoArray = gerarArray(qtdeSenhas)


function gerarSenhaASCII(): string {

    function gerarCaractereAscii(inicio: number, fim: number): string {
        const ascii = Math.floor(Math.random () * (fim - inicio +1 )) + inicio
        return String.fromCharCode(ascii)
    }

    let senha = ''
// letras minisculas
    for (let i = 0; i < 2; i++){
        senha += gerarCaractereAscii(65, 90)
    }
// letras maisculas
    for (let i = 0; i < 2; i++) {
        senha += gerarCaractereAscii(97, 122)
    }
// numeros
    for (let i = 0; i < 2; i++) {
        senha += gerarCaractereAscii(48,57)
    }

    const caracteresEspeciais = [46, 35, 47, 63, 64]
    senha += String.fromCharCode(caracteresEspeciais[Math.floor(Math.random() * caracteresEspeciais.length)])

    for (let i = 0; i < 3; i++) {
        const escolha = Math.random() < 0.5 ? gerarCaractereAscii(65,90) : gerarCaractereAscii(97, 122)
        senha += escolha
    }

    senha = senha.split('').sort(() => Math.random() - 0.5).join('')

    return senha

        
}

console.log(senhasNoArray)

