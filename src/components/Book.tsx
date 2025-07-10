
export default function Book({book}) {
  return (
    <div className="card bg-base-100 w-[180px] shadow-sm">
    <figure className="">
        <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
        className="rounded-xl h-[270px]" />
    </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{book.title}</h2>
        <p>{book.author}</p>
        <div className="rating rating-xs">
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
          </div>
          <p className="text-red-500">$7.66 - $15.65</p>
        </div>
    </div>
  )
}
