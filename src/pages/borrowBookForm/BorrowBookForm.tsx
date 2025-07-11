import toast from "react-hot-toast";
import { useBorrowBookMutation } from "../../redux/api/bookCreateApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

type BorrowProps = {
  book: { id: string; title: string; copies: number };
  onClose: () => void;
};

type BorrowFormInputs = {
  quantity: number;
  dueDate: string;
};


export default function BorrowBookForm({book, onClose}: BorrowProps) {

    const [borrowBook, {isLoading}] = useBorrowBookMutation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BorrowFormInputs>({
        mode: 'onTouched',
        defaultValues: { quantity: 1, dueDate: '' },
    });

    const onSubmit = async (data: BorrowFormInputs) => {
        console.log(book.id, data.quantity, data.dueDate)
        try {
        await borrowBook({
            bookId: book.id,
            quantity: data.quantity,
            dueDate: data.dueDate,
        }).unwrap();
        
        toast.success('📘 Borrow recorded!');
        onClose();
        navigate('/summary')
        } catch {
        toast.error('❌ Borrow failed');
        }
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <h2 className="text-xl font-semibold text-center mb-1">
            Borrow “{book.title}”
        </h2>

        {/* Quantity */}
        <div>
            <label className="block mb-1">Quantity (max {book.copies})</label>
            <input
            type="number"
            min={1}
            max={book.copies}
            {...register('quantity', {
                required: 'Quantity required',
                valueAsNumber: true,
                min: 1,
                max: {
                value: book.copies,
                message: `Only ${book.copies} copies left`,
                },
            })}
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {errors.quantity && (
            <p className="text-red-500 text-sm mt-1">
                {errors.quantity.message}
            </p>
            )}
        </div>

        {/* due date */}
        <div>
            <label className="block mb-1">Due date</label>
            <input
            type="date"
            {...register('dueDate', { required: 'Due date required' })}
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {errors.dueDate && (
            <p className="text-red-500 text-sm mt-1">
                {errors.dueDate.message}
            </p>
            )}
        </div>

        <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
            {isLoading ? 'Saving…' : 'Confirm Borrow'}
        </button>
        </form>
    );
}
