import { Toast } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Item from "../Home/Item/Item";
import useItems from "../hooks/useItems/useItems";
import Loding from "../Loading/Loding";
// import Product from "../Product/Product";

const MyItems = () => {
  let count = 0;
  // for modal
  const [deleteId, setDeleteId] = useState("");
  const [show, setShow] = useState(false);
  const [currentProductEmail, setCurrentProductEmail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id, email) => {
    setShow(true);
    setCurrentProductEmail(email);
    setDeleteId(id);
  };
  // for delete from database
  const handleYes = () => {
    // console.log("the delete item id is: ",deleteId);
    if (user.email === currentProductEmail) {
      fetch(
        `http://localhost:5000/items${deleteId}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log("Deleted Data: ",data);
          // for remove deleted item from client side
          if (data.deletedCount > 0) {
            const remaining = items.filter(
              (Item) => Item._id !== deleteId
            );
            setItems(remaining);
          }
        });
      Toast.success("Delete Success!", { theme: "colored" });
      handleClose();
    } else {
      Toast.error("You did'nt add this item so, you can't delete!", {
        theme: "colored",
      });
      handleClose();
    }
  };

  const [user, loading, error] = useAuthState(auth);
  //   console.log(user.email);
  const email = user.email;
  const [items, setItems] = useItems([]);
  useEffect(() => {
    fetch(`http://localhost:5000/items/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItems(data);
      });
  }, []);

  // for loading spinner 
  if(items.length===0){
    return <Loding/>
  }

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="my-info text-center">
          <h5>{user?.displayName}</h5>
          <p>{user.email}</p>
        </div>
        {items?.length <= 6 ? (
          <div className="text-center">
            <h2 className="text-danger my-2">
              You have not added any products
            </h2>
            <p>Please Add a new product to see here</p>
            <h4 className="mb-5">
              Click <Link to="/additem">Here</Link> to add a new item
            </h4>
          </div>
        ) : (
          <div className="">
            <h3 className="text-center text-success mb-5">{`You have added total: ${items.length} products`}</h3>
          </div>
        )}

        {items.map((item) => {
          return <items key={item._id} item={item}></items>;
        })}

      </div>
    </div>
  );
};

export default MyItems;
