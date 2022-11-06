export default function TestComponent() {
  return (
    <div className="bg-black pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by developers from over 80 planets
          </h2>
          <p className="mt-3 text-xl text-gray-300 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
      </div>
      <div className="mt-10 bg-white pb-12 dark:bg-black sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-black" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <dl className="rounded-lg bg-white shadow-lg dark:border dark:bg-black sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-300">
                    Pepperoni
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-black dark:text-white">
                    100%
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-300">
                    Delivery
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-black dark:text-white">
                    24/7
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-300">
                    Calories
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-black dark:text-white">
                    100k
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
