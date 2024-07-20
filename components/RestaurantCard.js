export default function RestaurantCard(props) {
  /**
   * props.item properties
   *
   * id: int
   * name: string
   * openTime: string
   * closeTime: string
   * location: string
   * website: string (can be null)
   * tags: [string]
   * about: string
   */

  const restaurant = props.item;

  return (
    <a
      href="#"
      className="block m-2 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <img
        className="rounded-t-lg"
        src="/docs/images/blog/image-1.jpg"
        alt="Image here"
      />
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {restaurant.name}
      </h1>
      <h2 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
        {restaurant.location}
      </h2>
      {restaurant.tags.map((tag) => {
        if (tag === "Fast Food") {
          return (
            <span className="bg-blue-100 text-blue-800 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Fast Food
            </span>
          );
        } else if (tag === "Light Meals") {
          return (
            <span className="bg-red-100 text-red-800 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
              Light Meals
            </span>
          );
        }
      })}
      <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
        {restaurant.about}
      </p>
    </a>
  );
}
