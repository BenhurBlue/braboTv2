
let time = [
    {
        nome: 'cassio',
        camisa: 12,
        posição:'Goleiro'
    },
    {
        nome: 'Fabio Santos',
        camisa: 26,
        posição:'Lateral Esquerdo'
    },

    {
        nome: 'Balbuena',
        camisa: 31,
        posição:'Zagueiro'
    },
    {
        nome: 'Bruno Mendez',
        camisa: 25,
        posição:'Zagueiro'
    },
    {
        nome: 'Fagner',
        camisa: 23,
        posição:'Lateral Direito'
    },
    {
        nome: 'Fauto Vera',
        camisa: 33,
        posição:'Volante'
    },
    {
        nome: 'Dú queiroz',
        camisa: 37,
        posição:'Volante'
    },
    {
        nome: 'Renato Augusto',
        camisa: 8,
        posição:'Meio Campo'
    },
    {
        nome: 'Mosquito',
        camisa: 19,
        posição:'Ponta Direita'
    },
    {
        nome: 'Yuri Alberto',
        camisa: 9,
        posição:'Centro Avante'
    },
    {
        nome: 'Roger Guedes',
        camisa: 10,
        posição:'Ponta Esquerda'
    },
    {
        nome: 'Vitor Perereira',
        camisa:null ,
        posição:'Tecnico',
        
    }
]

for (const key in time) {
    time[key]['multiplo']=time[key]['camisa'] * 2;



    }
    console.table(time);
