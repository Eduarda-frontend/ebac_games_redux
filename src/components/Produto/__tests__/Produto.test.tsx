import { fireEvent, screen } from '@testing-library/react'

import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows, PS5 '],
  preco: 299.9,
  precoAntigo: 399.9,
  titulo: 'Horgwarts Legacy'
}

describe('testes para o componente produto', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Horgwarts Legacy')).toBeInTheDocument()
  })
  test('Deve adicionar um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionaProduto')
    fireEvent.click(botao)
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
