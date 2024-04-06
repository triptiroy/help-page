// SidebarComponent.jsx
import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

function SidebarComponent() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
            Motor and Faults Information
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            Report Generation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Report
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarComponent;
