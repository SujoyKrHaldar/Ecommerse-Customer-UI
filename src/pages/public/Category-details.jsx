function CategoryDetails() {
  return (
    <>
      <section className="w-full h-[380px] bg-black pt-28 pb-8 flex items-center justify-center">
        <div className="absolute w-full h-full inset-0">
          <img
            className="object-top opacity-70"
            src="/assets/images/demo-collection-bg-image.jpg"
            alt="bg image"
          />
        </div>
        <div className="space-y-4 text-center">
          <p className="tag text-white font-medium">Home • collection</p>
          <h1 className="uppercase text-[1.6rem] tracking-[0.8rem] bg-white text-black px-8 py-2 pr-4">
            Men&apos;s Collection
          </h1>
        </div>
      </section>
    </>
  );
}

export default CategoryDetails;
