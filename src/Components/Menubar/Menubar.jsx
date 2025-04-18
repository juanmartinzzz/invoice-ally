import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, DollarSign, Package, Settings, User } from "lucide-react";

const MenuItem = ({Icon, label, disabled, expanded, route = null, onClick = null}) => {
  return (
    <div
      className={`flex items-center px-2 text-primary ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:text-accent1 cursor-pointer'}`}
      onClick={() => {
        if (onClick) {
          onClick();
        } else if (!disabled && route) {
          window.location.href = route;
        }
      }}>
      <Icon className={`w-8 h-8 bg-gray-100 rounded-full p-1`} />
      {expanded && <span className="mx-2 text-sm">{label}</span>}
    </div>
  )
}

const Menubar = () => {
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    { Icon: User, label: 'Profile', disabled: false, route: '/profile' },
    { Icon: Clock, label: 'History', disabled: false, route: '/history' },
    { Icon: Package, label: 'Packages', disabled: false, route: '/packages' },
    { Icon: DollarSign, label: 'Invoices', disabled: false, route: '/invoices' },
  ];

  console.log({expanded});

  return (
    <div className="h-screen border-r border-gray-300 shadow-sm">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col items-start gap-4 py-4">
          <MenuItem Icon={expanded ? ChevronLeft : ChevronRight} onClick={() => setExpanded(!expanded)} />

          {menuItems.map((item, index) => (
            <MenuItem key={index} Icon={item.Icon} label={item.label} disabled={item.disabled} expanded={expanded} route={item.route} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 py-4">
          <MenuItem Icon={Settings} label="Settings" disabled={true} expanded={expanded} route="/settings" />
        </div>
      </div>
    </div>
  )
}

export default Menubar;