import { getAnimeSchedules } from "@/libs/api-libs";
import Schedules from "./schedules";

const Page = async () => {

  const schedulesMonday = await getAnimeSchedules(
    `schedules`, 
    `filter=monday
    `);
  const schedulesTuesday = await getAnimeSchedules(
    `schedules`,
    `filter=tuesday`
  );
  const schedulesWednesday = await getAnimeSchedules(
    `schedules`,
    `filter=wednesday`
  );
  const schedulesThursday = await getAnimeSchedules(
    `schedules`,
    `filter=thursday`
  );
  const schedulesFriday = await getAnimeSchedules(
    `schedules`, 
    `filter=friday`
    );
  const schedulesSaturday = await getAnimeSchedules(
    `schedules`,
    `filter=saturday`
  );
  const schedulesSunday = await getAnimeSchedules(
    `schedules`,
    `filter=sunday`
  );
  // console.log(schedules)

  return (
    <div>
      <div className="justify-center items-center flex md:p-12 p-4 md:mt-0 mt-4">
        <h1 className="text-2xl font-black">Jadwal Terbaru🔥</h1>
      </div>

      <div className="md:p-12 flex justify-between relative scroll-smooth"> 

        <div className="grid md:grid-cols-1 grid-cols-1">
          
        <div className="md:shadow-xl dark:bg-colos-sidebarColor   
        dark:shadow-colos-accent rounded-xl dark:border-colos-accent" id="Ahad"> 
          <h1 className="flex md:justify-start md:items-center justify-start items-start mx-6 text-xl font-bold my-4">Ahad</h1>
          <Schedules api={schedulesSunday} />
        </div>
        <div className="md:shadow-xl dark:bg-colos-sidebarColor   
        dark:shadow-colos-accent rounded-xl dark:border-colos-accent md:my-8" id="Senin">
          <h1 className="flex md:justify-start md:items-center justify-start items-start mx-6 my-4 text-xl font-bold">Senin</h1>
            <Schedules api={schedulesMonday} />
        </div>

        <div className="md:shadow-xl dark:bg-colos-sidebarColor   
        dark:shadow-colos-accent rounded-xl dark:border-colos-accent md:my-8" id="Selasa">
          <h1 className="flex md:justify-start md:items-center justify-start items-start mx-6 text-xl font-bold my-4">Selasa</h1>
          <Schedules api={schedulesTuesday} />
        </div>

        <div className="md:shadow-xl dark:bg-colos-sidebarColor   
        dark:shadow-colos-accent rounded-xl dark:border-colos-accent 2xl:my-8 md:my-8" id="Rabu">
          <h1 className="flex md:justify-start md:items-center justify-start items-start mx-6 text-xl font-bold my-4">Rabu</h1>
          <Schedules api={schedulesWednesday} />
        </div>

        <div className="md:shadow-xl dark:bg-colos-sidebarColor   
        dark:shadow-colos-accent rounded-xl dark:border-colos-accent md:my-8" id="Kamis">
          <h1 className="flex md:justify-start md:items-center justify-start items-start mx-6 text-xl font-bold my-4">Kamis</h1>
          <Schedules api={schedulesThursday}/>
        </div>

        <div className="md:shadow-xl dark:bg-colos-sidebarColor   
        dark:shadow-colos-accent rounded-xl dark:border-colos-accent md:my-8" id="Jumat">
          <h1 className="flex md:justify-start md:items-center justify-start items-start mx-6 text-xl font-bold my-4">Jum'at</h1>
          <Schedules api={schedulesFriday} />
        </div>

        <div className="md:shadow-xl dark:bg-colos-sidebarColor   
        dark:shadow-colos-accent rounded-xl dark:border-colos-accent md:my-8" id="Sabtu">
          <h1 className="flex md:justify-start md:items-center justify-start items-start mx-6 text-xl font-bold my-4">Sabtu</h1>
          <Schedules api={schedulesSaturday} />
        </div>
        
        </div>

        <div className="md:mr-32 md:ml-24 xl:-mt-6 2xl:mt-8 mr-24 mt-6">
          <div className="fixed">
          <a href="#Ahad" className="flex md:justify-center md:items-center justify-start items-start mx-6 md:mx-0 text-base md:text-xl font-black my-6 text-colos-SidebarAccent hover:text-colos-primary dark:hover:text-colos-accent ">AHAD</a>
           <a href="#Senin" className="flex md:justify-center md:items-center justify-start items-start mx-6 md:mx-0 text-base md:text-xl font-bold my-6
           hover:text-colos-SidebarAccent dark:hover:text-colos-SidebarAccent ">Senin</a>
           <a href="#Selasa" className="flex md:justify-center md:items-center justify-start items-start mx-6 md:mx-0 text-base md:text-xl font-bold my-6 hover:text-colos-SidebarAccent dark:hover:text-colos-SidebarAccent ">Selasa</a>
           <a href="#Rabu" className="flex md:justify-center md:items-center justify-start items-start mx-6 md:mx-0 text-base md:text-xl font-bold my-6 hover:text-colos-SidebarAccent dark:hover:text-colos-SidebarAccent ">Rabu</a>
           <a href="#Kamis" className="flex md:justify-center md:items-center justify-start items-start mx-6 md:mx-0 text-base md:text-xl font-bold my-6 hover:text-colos-SidebarAccent dark:hover:text-colos-SidebarAccent ">Kamis</a>
           <a href="#Jumat" className="flex md:justify-center md:items-center justify-start items-start mx-6 md:mx-0 text-base md:text-xl font-bold my-6 hover:text-colos-SidebarAccent dark:hover:text-colos-SidebarAccent ">Jum'at</a>
           <a href="#Sabtu" className="flex md:justify-center md:items-center justify-start items-start mx-6 md:mx-0 text-base md:text-xl font-bold my-6 hover:text-colos-SidebarAccent dark:hover:text-colos-SidebarAccent ">Sabtu</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
