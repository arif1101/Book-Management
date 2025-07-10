import React from "react";
import {useForm} from "react-hook-form"
import { useAddBookMutation } from "../../redux/api/bookCreateApi";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

type BookFormInputs = {
    title: string,
    author: string,
    genre: string,
    isbn: string,
    description: string,
    copies: number;
}

export default function AddBook() {
    const navigate = useNavigate()
    const [addBook] = useAddBookMutation()

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
        trigger,
    } = useForm<BookFormInputs>({
        mode: "onTouched",
        defaultValues: {
            title: "",
            author: "",
            genre: "",
            isbn: "",
            description: "",
            copies: undefined,
        }
    })

    const onSubmit = async(data: BookFormInputs) => {
        try{
            const result = await addBook({...data, available: data.copies>0}).unwrap();
            toast.success("📚 Book added successfully!")
            reset();
            console.log("success", result);
            navigate("/books")
        }catch(error){
            console.log("Failed to add book", error)
            toast.error("❌ Failed to add book.");
        }
    };

    React.useEffect(() => {
        trigger();
    }, [trigger]);
    
    
  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">➕ Add New Book</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Author</label>
          <input
            type="text"
            {...register("author", { required: "Author is required" })}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
        </div>

        {/* Genre */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Genre</label>
            <select
            {...register("genre", { required: "Genre is required" })}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <option value="">Select Genre</option>
            <option value="FICTION">Fiction</option>
            <option value="NON_FICTION">Non-Fiction</option>
            <option value="SCIENCE">Science</option>
            <option value="HISTORY">History</option>
            <option value="BIOGRAPHY">Biography</option>
            <option value="FANTASY">Fantasy</option>
            <option value="OTHER">Other</option>
            </select>
            {errors.genre && (
            <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>
            )}
        </div>

        {/* ISBN */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">ISBN</label>
          <input
            type="text"
            {...register("isbn", { required: "ISBN is required" })}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.isbn && <p className="text-red-500 text-sm mt-1">{errors.isbn.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full border px-3 py-2 rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        {/* Copies */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Copies</label>
          <input
            type="number"
            {...register("copies", {
              required: "Copies is required",
              valueAsNumber: true,
              min: { value: 1, message: "Minimum 1 copy required" },
            })}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.copies && <p className="text-red-500 text-sm mt-1">{errors.copies.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Book
        </button>
      </form>
    </div>
  );
}
