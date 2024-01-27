import React from 'react'
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloud, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import userImg from "../assets/otherimages/propic.jpg"

const SideBar = () => {
  return (
    <div className='h-[750px] bg-black'>
        <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" img={userImg} imgAlt="logo">
        Admin
      </Sidebar.Logo>

      <Sidebar.Items>

        <Sidebar.ItemGroup>

          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Furniture
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Furniture
          </Sidebar.Item>

          <Sidebar.Item href="/sign-up" icon={HiUser}>
            Add Admins
          </Sidebar.Item>

          <Sidebar.Item href="/" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBar