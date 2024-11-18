import { CircleCheckBig, X } from "lucide-react";

function Notification() {
  return (
    <section className="container pointer-events-auto opacity-0">
      <div
        className={`flex items-center justify-between gap-8 p-4 border border-black bg-red-700`}
      >
        <div className="flex items-center gap-2">
          <CircleCheckBig size={20} color="white" />
          <p className="text-sm text-white">Something went wrong</p>
        </div>

        <div className="cursor-pointer">
          <X color="white" size={20} />
        </div>
      </div>
    </section>
  );
}

export default Notification;
