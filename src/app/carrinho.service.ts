import { Injectable } from '@angular/core';
import { iProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: iProdutoCarrinho[] = [];


  constructor() { }

  obtemCarrinho(){
  this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
  return this.itens;
  }

  adicionarAoCarrinho(produto: iProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify (this.itens));
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify (this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }


}
