'use client';
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";



interface SidebarProps {
  children: React.ReactNode;
}


const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      Icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      href: '/'
    },
    {
      Icon: BiSearch,
      label: 'Search',
      active: pathname === '/search',
      href: '/search'
    },

  ], [pathname])


  {/* {children} */ }
  return (
    <div className="flex h-full">
      <Box className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        Sidebar
     
   
   <Box>
    <div className="flex flex-col gap-y-4 px-5 py-4">
    {
      routes.map((item) => (
        <SidebarItem  key={item.label} {...item} />
      ))
    }
    </div>
</Box>
</Box> 
      <Box className="overflow-auto h-full">
        Song Library
      </Box>
    </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar