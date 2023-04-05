export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface iProdutoCarrinho extends IProduto{
    quantidade: number;
    
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "MOTO CG ZERO KM", preco: 1.00, descricaoPreco: " 08/04 - 28º edição", imagem: "./assets/moto.jpeg", quantidadeEstoque: 10000 },
    { id: 2, descricao: "R$54.000,00 na conta!", preco: 1.00, descricaoPreco: "12/04 - 74º edição", imagem: "./assets/54000.jpeg", quantidadeEstoque: 10000  },
    { id: 3, descricao: "R$5.000,00 na conta!", preco: 1.00, descricaoPreco: "05/04 - 5º edição", imagem: "./assets/5000.jpeg", quantidadeEstoque: 10000  },
    { id: 4, descricao: "R$1.500,00 na conta!", preco: 1.00, descricaoPreco: "04/04 - 5º edição", imagem: "./assets/1500.jpeg", quantidadeEstoque: 10000  },
    { id: 5, descricao: "R$10.000,00 na conta!", preco: 1.00, descricaoPreco: "04/04 - 572º edição", imagem: "./assets/10000.jpeg", quantidadeEstoque: 10000  },
    { id: 6, descricao: "R$20.000,00 na conta! ", preco: 1.00, descricaoPreco: "04/04 - 252º edição", imagem: "./assets/20000.jpeg", quantidadeEstoque: 10000  },
    { id: 7, descricao: "R$3.400,00 na conta!!", preco: 1.00, descricaoPreco: "04/04 - 811° edição", imagem: "./assets/3400.jpeg" , quantidadeEstoque: 10000 },
    { id: 8, descricao: "R$54.000,00 na conta!", preco: 1.00, descricaoPreco: "01/04 - 73º edição",imagem: "./assets/54000.jpeg", quantidadeEstoque: 10000  },
    { id: 9, descricao: "R$5.000,00 na conta!", preco: 1.00, descricaoPreco: "01/04 - 4º edição", imagem: "./assets/5000.jpeg", quantidadeEstoque: 10000  },
    { id: 10, descricao: "R$1.500,00 na conta!", preco: 1.00, descricaoPreco: "01/04 - 4º edição", imagem: "./assets/1500.jpeg", quantidadeEstoque: 10000  },
    { id: 11, descricao: "R$10.000,00 na conta!", preco: 1.00, descricaoPreco: "01/04 - 571º edição", imagem: "./assets/10000.jpeg", quantidadeEstoque: 10000  },
    { id: 12, descricao: "R$20.000,00 na conta!", preco: 1.00, descricaoPreco: "01/04 - 251º edição", imagem: "./assets/20000.jpeg" , quantidadeEstoque: 10000 },
    { id: 13, descricao: "R$3.400,00 na conta!!", preco: 1.00, descricaoPreco: "01/04 - 810° edição", imagem: "./assets/3400.jpeg" , quantidadeEstoque: 10000 },
    { id: 14, descricao: "MOTO CG ZERO KM", preco: 1.00, descricaoPreco: " 01/04 - 27º edição", imagem: "./assets/moto.jpeg", quantidadeEstoque: 10000  },
    { id: 16, descricao: "R$54.000,00 na conta!", preco: 1.00, descricaoPreco: "24/03 - 73º edição",  imagem: "./assets/54000.jpeg" , quantidadeEstoque: 10000 }
]