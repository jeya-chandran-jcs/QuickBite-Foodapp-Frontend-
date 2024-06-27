import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pay } from '../../services/orderService';
import { useCart } from '../../hooks/useCart';
import { toast } from 'react-toastify';
import './PaymentModal.css';

const PaymentModal = ({ order, closeModal }) => {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = async (paymentMethod) => {
    try {
      const paymentId = `fake-${paymentMethod}-${Date.now()}`; 
      const orderId = await pay(paymentId); 
      clearCart(); 
      toast.success('Payment Saved Successfully', 'Success');
      closeModal(); 
      navigate(`/orders`); 
    } catch (error) {
      toast.error('Payment Save Failed', 'Error');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Select Payment Method</h2>
        <button onClick={() => handlePayment('cash')}>Pay with Cash</button>
        <button onClick={() => handlePayment('paytm')}>Pay with Paytm</button>
        <button onClick={() => handlePayment('card')}>Pay with Card</button>
      </div>
    </div>
  );
};

export default PaymentModal;
