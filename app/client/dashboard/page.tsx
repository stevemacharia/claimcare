
'use client';
import { useState } from "react";
import React from "react";

import ClientSideBar from '@/components/ClientSideBar';
import HospitalVisitsTable from '@/components/HospitalVisitsTable';
import HospitalVisitModal from '@/components/HospitalVisitModal';

export default function ClientDashboard() {
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