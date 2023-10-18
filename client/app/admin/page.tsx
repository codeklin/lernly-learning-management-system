'use client';

import { useState } from 'react';
import { DashboardHero } from '../components/Admin/DashboardHero';
import Topbar from '../components/Admin/topbar/Topbar';
import AdminProtected from '../hooks/adminProtected';
import Heading from '../utils/Heading';

const page = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AdminProtected>
        <Heading
          title="Admin - Learnly"
          description="Empower students to learn and teachers to assist effortlessly with our intuitive learnly dashboard, designed to enhance the online learning experience."
          keywords="Learning, Online courses, Programming, Coding, MERN"
        />
        <div className="flex">
          <Topbar open={open} setOpen={setOpen} />
          <DashboardHero isDashboard={true} open={open} />
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
