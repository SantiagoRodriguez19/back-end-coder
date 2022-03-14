import fs from 'fs';

class Archivo {
    constructor(fileRoute) {
        this.fileRoute = fileRoute;
    }

    async leerArchivo() {
        try {
            if (fs.existsSync(this.fileRoute)) {
                let content = await fs.promises.readFile(
                    this.fileRoute,
                    'utf-8'
                );
                let data = await JSON.parse(content);
                return data;
            } else {
                fs.promises.writeFile(
                    this.fileRoute,
                    JSON.stringify('[]', null, '\t')
                );
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    async leer() {
        try {
            let data = await this.leerArchivo();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async guardar(prod) {
        try {
            let content = await this.leerArchivo();
            prod.id = content.length + 1;
            await content.push(prod);
            await fs.promises.writeFile(
                this.fileRoute,
                JSON.stringify(content, null, '\t')
            );
        } catch (error) {
            console.log(error);
        }
    }

    async borrar() {
        try {
            if (fs.existsSync(this.fileRoute)) {
                await fs.promises.unlink(this.fileRoute);
            } else {
                console.log('Ese archivo no existe');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

let arrayDeProds = [
    {
        title: 'Mochila',
        price: 3520.45,
        thumbnail:
            'https://img.kalunga.com.br/fotosdeprodutos/440595d.jpg',
        id: 1,
    },
    {
        title: 'Agenda',
        price: 650.56,
        thumbnail:
            'https://a-static.mlcdn.com.br/618x463/agenda-mini-2022-hello-dac/infoserra/156742/afbe9909d3fbbcd52d9581772c326b4e.jpg',
        id: 2,
    },
    {
        title: 'Marcadores',
        price: 345.67,
        thumbnail:
            'https://walmartgt.vtexassets.com/arquivos/ids/233668/Marcador-Sharpie-Fine-Basicos-12-Unidades-1-6993.jpg?v=637770261964130000.jpg',
        id: 3,
    },
];

let prodTest = new Archivo('productos.txt');

const guardarProd = async (arrayProds, archivo) => {
    for (let i = 0; i < arrayProds.length; i++) {
        await archivo.guardar(arrayProds[i]);
    }
};

//Ejecutar primero esta linea
guardarProd(arrayDeProds, prodTest);

//Despues estas
//prodTest.leer();
//prodTest.borrar();