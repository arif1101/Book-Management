type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({isOpen, onClose, children}: ModalProps) {
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md w-full max-w-xl relative shadow-lg">
                <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                >
                ✖
                </button>
                {children}
            </div>
        </div>
    )
}
