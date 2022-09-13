import Cart from "./ItemCart";

function CartTable({ Cart} ) {

  console.log(Cart);
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Talle</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CartTable;