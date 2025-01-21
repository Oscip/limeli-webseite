import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useCart } from "../Components/CartContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // Calculate subtotal and total
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  const handleCheckoutClick = () => {
    navigate("/checkout"); // Navigate to checkout
  };

  return (
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol lg="7">
                      <MDBTypography tag="h5">
                        <a href="/drinks" className="text-body">
                          <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue shopping
                        </a>
                      </MDBTypography>

                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">
                            You have {cart.reduce((acc, item) => acc + item.quantity, 0)} items in your cart
                          </p>
                        </div>
                      </div>

                      {cart.map((item) => (
                          <MDBCard className="mb-3" key={item.id}>
                            <MDBCardBody>
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <MDBCardImage
                                      src={item.image}
                                      fluid
                                      className="rounded-3"
                                      style={{ width: "65px" }}
                                      alt={item.name}
                                  />
                                  <div className="ms-3">
                                    <MDBTypography tag="h5">{item.name}</MDBTypography>
                                    <p className="small mb-0">Price: ${item.price.toFixed(2)}</p>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                  <div style={{ width: "50px" }}>
                                    <MDBTypography tag="h5" className="fw-normal mb-0">
                                      {item.quantity}
                                    </MDBTypography>
                                  </div>
                                  <div style={{ width: "80px" }}>
                                    <MDBTypography tag="h5" className="mb-0">
                                      ${(item.price * item.quantity).toFixed(2)}
                                    </MDBTypography>
                                  </div>
                                  <div className="d-flex">
                                    <button
                                        className="btn btn-success btn-sm me-1"
                                        onClick={() => updateQuantity(item.id, 1)}
                                    >
                                      +
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => updateQuantity(item.id, -1)}
                                    >
                                      -
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </MDBCardBody>
                          </MDBCard>
                      ))}
                    </MDBCol>

                    <MDBCol lg="5">
                      <MDBCard className="text-white rounded-3 bg-success">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0">
                              Summary
                            </MDBTypography>
                          </div>

                          <hr />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">${subtotal.toFixed(2)}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">${shipping.toFixed(2)}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Total (Incl. taxes)</p>
                            <p className="mb-2">${total.toFixed(2)}</p>
                          </div>

                          <button onClick={handleCheckoutClick} className="btn btn-green btn-lg w-100">
                            <div className="d-flex justify-content-between">
                              <span>${total.toFixed(2)}</span>
                              <span>
                              Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                            </div>
                          </button>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
  );
}
