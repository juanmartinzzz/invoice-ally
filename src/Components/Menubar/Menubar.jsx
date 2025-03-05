import { ChevronRight, Clock, DollarSign, LogOut, Package, Settings, User } from "lucide-react";

const MenuItem = ({Icon, onClick}) => {
  return (
    <Icon className="w-8 h-8 cursor-pointer text-primary hover:text-accent1 bg-gray-100 rounded-full p-1" />
  )
}

const Menubar = () => {
  return (
    <div className="w-24 h-screen border-r border-gray-300 shadow-sm">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col items-center gap-4 py-4">
          <MenuItem Icon={ChevronRight} onClick={() => {}} />
          <MenuItem Icon={User} onClick={() => {}} />
          <MenuItem Icon={Clock} onClick={() => {}} />
          <MenuItem Icon={Package} onClick={() => {}} />
          <MenuItem Icon={DollarSign} onClick={() => {}} />
        </div>

        <div className="flex flex-col items-center gap-4 py-4">
          <MenuItem Icon={Settings} onClick={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default Menubar;