import { useForm } from 'react-hook-form';
import { useUpdateBookMutation } from '../../redux/api/bookCreateApi';
import toast from 'react-hot-toast';

type BookForm = {
  title: string;
  author: string;
  genre: string;
  copies: number;
};

type Props = {
  book: BookForm & { _id: string };
  onClose: () => void;
};

export default function UpdateBookForm({ book, onClose }: Props) {
  const [updateBook] = useUpdateBookMutation();

  const genres = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
    "OTHER",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<BookForm>({
    defaultValues: {
      title: book?.title || '',
      author: book?.author || '',
      genre: book?.genre || '',
      copies: book?.copies || 1,
    },
    mode: 'onSubmit',
  });

  const onSubmit = async (data: BookForm) => {
    try {
      await updateBook({ id: book._id, ...data }).unwrap();
      toast.success("✅ Book updated!");
      onClose();
    } catch{
      toast.error("❌ Failed to update");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Update Book</h2>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Title</label>
        <input
          {...register("title", { required: true })}
          className="input w-full border px-3 py-2 rounded"
        />
        {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Author</label>
        <input
          {...register("author", { required: true })}
          className="input w-full border px-3 py-2 rounded"
        />
        {errors.author && <p className="text-red-500 text-sm">Author is required</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Category</label>
        <select
          {...register("genre", { required: true })}
          className="input w-full border px-3 py-2 rounded"
        >
          <option value="">Select a genre</option>
          {!genres.includes(book.genre) && (
            <option value={book.genre}>{book.genre}</option>
          )}
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        {errors.genre && <p className="text-red-500 text-sm">Genre is required</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Copies</label>
        <input
          {...register("copies", { required: true, valueAsNumber: true })}
          type="number"
          className="input w-full border px-3 py-2 rounded"
        />
        {errors.copies && <p className="text-red-500 text-sm">Copies required</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
}
