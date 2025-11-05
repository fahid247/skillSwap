import React from "react";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FaStar, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import toast from "react-hot-toast";

const DetailedSkill = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const filtertheSkill = skills.filter((data) => data.skillId == id);
  const filteredSkill = filtertheSkill[0];

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center flex justify-center items-center mt-10 text-gray-500">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <section className="min-h-screen bg-[#E1D0B3] max-w-[1440px] mx-auto p-5">
        <div className=" bg-white rounded-xl shadow-lg p-5">
          <div className="p-4">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-ghost gap-2 text-primary"
            >
              <FaArrowLeft /> Back
            </button>
          </div>

          <div className="md:flex">
            <div className="md:w-1/2 ">
              <img
                src={filteredSkill.image}
                alt={filteredSkill.skillName}
                className="w-full h-fit object-cover rounded-2xl"
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-3">
                {filteredSkill.skillName}
              </h1>
              <p className="text-gray-600 mb-3">
                <span className="font-semibold">Category:</span>{" "}
                {filteredSkill.category}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold">{filteredSkill.rating}</span>
              </div>

              <p className="text-gray-700 mb-6">{filteredSkill.description}</p>

              <div className="space-y-3 mb-6">
                <p>
                  <span className="font-semibold">Provider:</span>{" "}
                  {filteredSkill.providerName}
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope /> {filteredSkill.providerEmail}
                </p>
                <p>
                  <span className="font-semibold">Available Slots:</span>{" "}
                  {filteredSkill.slotsAvailable}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> $
                  {filteredSkill.price} / session
                </p>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="btn btn-primary w-full"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>
        {open && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Book Session
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Booking submitted!",{
                    style:{
                        backgroundColor:'#703B3B',
                        color:'white'
                    }
                  });
                  setOpen(false);
                }}
                className="space-y-4 "
              >
                <div>
                  <label className="label mb-2 font-semibold text-black">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered w-full bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="label mb-2 font-semibold text-black">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full bg-white"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default DetailedSkill;
