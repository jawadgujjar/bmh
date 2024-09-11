import React from 'react';
import { Modal } from 'antd';
import './portfoliomodal.css';

const PortfolioModal1 = ({ isVisible, onClose, images }) => {
  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      style={{ textAlign: 'center' }}
      width={600}
      onOk={onClose}
    >
      <div className="modal-gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
    </Modal>
  );
};

export default PortfolioModal1;
