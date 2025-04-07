const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-bold"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
