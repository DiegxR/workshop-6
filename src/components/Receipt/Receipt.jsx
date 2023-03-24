import React from 'react'
import { useSelector } from 'react-redux'
import './receipt.scss'

const Receipt = () => {
  const {totalBurger, totalPrice, burgers} = useSelector(store => store.builder)
  console.log({totalBurger: totalBurger, totalPrice: totalPrice, burgers: burgers})
  return (
    <div className='receipt'>
      <section className='receipt__info'>
        <div>
          <h1>FACTURA<span>3000-0101</span></h1>
          <img src="https://cdn-icons-png.flaticon.com/128/5787/5787016.png" alt="logo" />
        </div>
        <h4>VENTABURGERS</h4>
        <small>Agustín Codazzi</small>

        <table>
          <thead>
            <tr>
              <th>PRODUCTO</th>
              <th>CANTIDAD</th>
              <th>PRECIO</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hamburguesita</td>
              <td>1</td>
              <td>10 lucas</td>
              <td>10 Lucas</td>
            </tr>
            <tr>
              <td>Hamburguesita</td>
              <td>1</td>
              <td>10 lucas</td>
              <td>10 Lucas</td>
            </tr>
            <tr>
              <td>Hamburguesa</td>
              <td>1</td>
              <td>10 lucas</td>
              <td>10 Lucas</td>
            </tr>
          </tbody>
        </table>
        <div>
          <strong>TOTAL</strong>
          <small>30 Lucas</small>
        </div>

        <small><strong>Vendedor:</strong>  Wilinton Ascanio</small>




      </section>
    </div>
  )
}

export default Receipt