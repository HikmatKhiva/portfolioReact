import { ServiceCard } from "../../components/";
import { services } from "../../config";
const Service = () => {
  return (
    <section
      id="service"
      className='flex-grow p py-10 lex overflow-hidden dark:text-white relative items-center flex-col gap-y-6"'
    >
      <div className="px-3 md:px-2">
        <h2 className="2xl:text-4xl text-3xl block text-center mb-2">
          My Service
        </h2>
        <div className="flex gap-x-20 gap-y-5 justify-center flex-wrap mt-10">
          {services &&
            services.map((service, index) => (
              <ServiceCard key={service.id} index={index} service={service} />
            ))}
        </div>
      </div>
    </section>
  );
};
export default Service;