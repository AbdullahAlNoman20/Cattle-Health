import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div>
      <section className="border flex ">
        <div className="border w-2/12 p-4 m-4">
          Button section
          <div className="border flex flex-col">
            <NavLink to="/dashboard">
            <button className="btn btn-outline m-2"> Profile </button>
            </NavLink>
           <NavLink to="Reviews"><button className="btn btn-outline m-2"> Reviews </button></NavLink>
           <NavLink to="Services"><button className="btn btn-outline m-2"> Services </button></NavLink>
           <NavLink to="contact"><button className="btn btn-outline m-2"> Contact </button></NavLink>
            
            
            
          </div>
          <hr />
          <div className="">others button section</div>
        </div>
        <div className="border p-4 m-4">
          Content Section
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
