/* eslint-disable react/prop-types */

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, price, slots, image, specialty } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <div className="items-center flex justify-center">
          <img
            src={image}
            alt="doctor image"
            className="w-48 h-48 rounded-lg"
          />
        </div>
        <h2 className="text-2xl text-blue-700 font-bold text-center">{name}</h2>
        <p className="font-semibold">{specialty}</p>
        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>
          <small>Price: ${price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary bg-blue-700 hover:bg-blue-500 text-white"
            onClick={() => setTreatment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
