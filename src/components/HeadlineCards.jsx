import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3  gap-6">
      {/* card */}
      {/* card1 */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Momo Weather</p>
          <p className="px-2 text-orange-500">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now{" "}
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>

      {/* card2 */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Resturants</p>
          <p className="px-2 text-orange-500">At your finger tips</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now{" "}
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1593252719532-53f183016149?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* card3 */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Delicious Desserts</p>
          <p className="px-2 text-orange-500">At Your Doorsteps</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now{" "}
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1609540969455-ad5ea19be121?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
