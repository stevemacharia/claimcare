
'use client';
import { useState } from "react";
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
import HospitalVisitModal from '@/components/HospitalVisitModal';

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

      <HospitalVisitModal/>


      <HospitalVisitsTable/>

        


      </div>
    </div>
    
    </>

  );
}

// export default function ClientDashboard() {
//     return <div>Client Dashboard</div>;
//   }