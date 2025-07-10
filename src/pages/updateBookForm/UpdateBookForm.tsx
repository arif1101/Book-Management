
import { useForm } from 'react-hook-form';
import { useUpdateBookMutation } from '../../redux/api/bookCreateApi';
import toast from 'react-hot-toast';
type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  book: any;
  onClose: () => void;
};

export default function UpdateBookForm({book, onClose}: Props) {

    const [updateBook] = useUpdateBookMutation();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: book,
    });

    const onSubmit = async (data) => {
        try {
            await updateBook({ id: book._id, ...data }).unwrap();
            toast.success("✅ Book updated!");
            onClose(); // Close modal
            // console.log(data)
        } catch (error) {
        toast.error("❌ Failed to update");
        }
    };
    
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Update Book</h2>

      <input {...register("title", { required: true })} className="input w-full" />
      {errors.title && <p className="text-red-500 text-sm">Title is required</p>}

      <input {...register("author", { required: true })} className="input w-full" />
      {errors.author && <p className="text-red-500 text-sm">Author is required</p>}

      <input {...register("genre", { required: true })} className="input w-full" />
      {errors.genre && <p className="text-red-500 text-sm">Genre is required</p>}

      <input {...register("copies", { required: true })} type="number" className="input w-full" />
      {errors.copies && <p className="text-red-500 text-sm">Copies required</p>}

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save Changes
      </button>
    </form>
  )
}
