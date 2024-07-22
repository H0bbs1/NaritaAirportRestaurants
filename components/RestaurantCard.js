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
      className="block m-3 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <img
        className="rounded-t-lg mb-4 object-cover h-48 w-96"
        src={restaurant.image_link}
        alt="Image here"
      />
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {restaurant.name}
      </h1>
      <div className="flex mb-1">
        <img className="mr-2 pb-1.5" src="/locationIcon.svg" />
        <h2 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
          {restaurant.location}
        </h2>
      </div>

      {restaurant.tags.map((tag) => {
        let tagElement;
        if (tag === "Fast Food") {
          tagElement = (
            <span className="bg-blue-100 text-blue-800 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Fast Food
            </span>
          );
        } else if (tag === "Chinese Cuisine") {
          tagElement = (
            <span className="bg-red-100 text-red-800 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
              Chinese
            </span>
          );
        } else if (tag === "Japanese Cuisine") {
          tagElement = (
            <span class="bg-indigo-100 text-indigo-800 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
              Japanese
            </span>
          );
        } else if (tag === "Cafe") {
          tagElement = (
            <span class="bg-green-100 text-green-800 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              Cafe
            </span>
          );
        } else if (tag === "Bar") {
          tagElement = (
            <span class="bg-purple-100 text-purple-800 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
              Bar
            </span>
          );
        } else if (tag === "Western Cuisine") {
          tagElement = (
            <span class="bg-pink-100 text-pink-800 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              Western
            </span>
          );
        } else if (tag === "Convenience Store") {
          tagElement = (
            <span class="bg-gray-100 text-gray-800 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-900 dark:text-gray-300">
              Convenience Store
            </span>
          );
        }
        return tagElement;
      })}
      <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
        {restaurant.about}
      </p>
    </a>
  );
}
