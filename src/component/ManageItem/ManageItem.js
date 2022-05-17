import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../hooks/useItems/useItems';
import './ManageItem.css'

const ManageItem = () => {
  const navigate = useNavigate();
  const [items, setItems] = useItems();

  const addItemButton = () => {
    navigate('/additem')
  }

  const handleDelete = id => {
    const sure = window.confirm('are you want to delete?');
    if (sure) {
      const url = `https://stormy-brushlands-39122.herokuapp.com/items/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = items.filter(item => item._id !== id);
          setItems(remaining)
        })
    }
  }

  return (
    <div>
      <h1>Manage Items</h1>

      <div className='item'>
        {
          items.map(item => <div key={item._id}>
            <div className='items w-50'>
              <img style={{ height: "250px" }} src={item.img} alt="" />
              <h3>Name:{item.name}</h3>
              <p><small>Description:{item.description}</small></p>
              <p>Price:{item.price}</p>
              <p>Supplier Name:{item.supplier}</p>
              <Button onClick={() => handleDelete(item._id)}>Delete</Button>
            </div>
          </div>)
        }
      </div>
      <Button className='mt-5' onClick={addItemButton}>Add New Item</Button>
    </div>
  );
};

export default ManageItem;