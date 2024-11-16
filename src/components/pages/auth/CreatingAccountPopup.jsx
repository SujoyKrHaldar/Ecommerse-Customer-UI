function CreatingAccountPopup() {
  return (
    <div className="relative max-w-lg mx-auto px-12 pt-8 pb-12 flex items-center justify-center">
      <div className="absolute w-full h-[75%] bg-white border border-zinc-500 bottom-0 left-0"></div>
      <div className="text-center flex items-center flex-col justify-center gap-4">
        <div className="w-[150px] h-auto rotate-6">
          <img src="/assets/illustrations/loading.png" alt="email exits" />
        </div>
        <div className="mb-1">
          <h2>
            Creating your <span className="text-orange-700">Account</span>
          </h2>
          <p>Please wait, we are creating your account.</p>
        </div>
        <div className="animate-spin h-10 w-10 border-4 border-black border-r-white rounded-full"></div>
      </div>
    </div>
  );
}

export default CreatingAccountPopup;
