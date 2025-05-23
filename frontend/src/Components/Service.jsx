import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {

    const [services , setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then((response) => response.json())
      .then((services) => setServices(services))
      
  }, []);

  return (
    <div className="p-5 my-10 mx-5">
      <div className="text-center ">
        
          <h1 className="font-extrabold text-5xl">Our top {services.length} specialist</h1>
          <p className="mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab animi
            quidem, nisi natus dolorem repellendus voluptas reiciendis soluta
            repellat porro doloribus assumenda quod non id cupiditate modi sit!
            Quis, odio?
          </p>
        
      </div>
      
        <section className="grid grid-cols-1 lg:grid-cols-3">
      {services.map(service => 
        <ServiceCard key={service.id} service={service}></ServiceCard>
      )}
      </section>
        
    </div>
  );
};

export default Service;
