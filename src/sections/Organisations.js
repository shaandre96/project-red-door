import React from "react";

const orgs = [
  { name: "org1" },
  { name: "org2" },
  { name: "org3" },
  { name: "org4" },
  { name: "org5" },
  { name: "org6" },
];

const OrgCard = ({ name }) => {
  return (
    <div className="flex rounded border-2 border-solid border-primary p-4 items-center">
      <div className="bg-primary w-[80px] h-[80px] rounded-full mx-4"></div>
      <div>{name}</div>
    </div>
  );
};

const Organisations = () => {
  return (
    <div className="px-16 py-8">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <select
            id="services"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 shadow-lg"
          >
            <option selected>Type of service</option>
            <option value="A">Service A</option>
            <option value="B">Service B</option>
            <option value="C">Service C</option>
            <option value="D">Service D</option>
          </select>
        </div>
        <div>
          <select
            id="specialties"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 shadow-lg"
          >
            <option selected>Specialty area</option>
            <option value="A">Specialty A</option>
            <option value="B">Specialty B</option>
            <option value="C">Specialty C</option>
            <option value="D">Specialty D</option>
          </select>
        </div>
        <div>
          <select
            id="locations"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 shadow-lg"
          >
            <option selected>Location</option>
            <option value="A">Location A</option>
            <option value="B">Location B</option>
            <option value="C">Location C</option>
            <option value="D">Location D</option>
          </select>
        </div>
        <div>
          <select
            id="ages"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 shadow-lg"
          >
            <option selected>Age</option>
            <option value="A">Age A</option>
            <option value="B">Age B</option>
            <option value="C">Age C</option>
            <option value="D">Age D</option>
          </select>
        </div>
      </div>
      <div className="grid grid-rows-6 gap-6 my-8">
        {orgs.map((org, i) => {
            return <OrgCard name={org.name} key={i} />
        })}
      </div>
    </div>
  );
};

export default Organisations;
