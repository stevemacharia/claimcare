
'use client';
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import ClientSideBar from '@/components/ClientSideBar';
import HospitalVisitsTable from '@/components/HospitalVisitsTable';

export default function ClientDashboard() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  
  
  return (

    <>
    <div className="grid grid-flow-col grid-rows-2 gap-0">

      <div className="row-span-2 ...">
        <ClientSideBar/>
      </div>
      <div className="col-span-8 p-4">
        <p className="mt-4 text-start text-2xl font-semibold text-gray-950 sm:text-3xl">
          Create and Schedule your Visits
        </p>


        <div class="relative min-h-60 w-full flex flex-col justify-center items-center my-6 bg-white shadow-sm border border-slate-200 rounded-lg p-2">
          <div class="p-3 text-center">
            <div class="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            </div>
            <div class="flex justify-center mb-2">
              <h5 class="text-slate-800 text-2xl font-semibold">
                Click to create new hospital visit
              </h5>
            </div>

          </div>
        </div>

      <HospitalVisitsTable/>

        


      </div>
    </div>
    
    </>

  );
}

// export default function ClientDashboard() {
//     return <div>Client Dashboard</div>;
//   }