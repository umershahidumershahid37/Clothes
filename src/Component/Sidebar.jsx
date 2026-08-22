import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Shirt, 
  Layers, 
  Sun, 
  CloudRain, 
  Briefcase, 
  Flame, 
  Scissors, 
  ChevronDown, 
  X,
  Menu
} from 'lucide-react';

// Custom Item component for consistency
const SidebarItem = ({ icon: Icon, label, count, active, hasDropdown, dropdownOpen }) => (
  <div className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 group cursor-pointer border ${
    active 
      ? 'bg-[#b98a55] text-neutral-900 shadow-md border-[#b98a55]' 
      : 'bg-neutral-900/80 text-white hover:bg-neutral-900 border-neutral-800'
  }`}>
    <div className="flex items-center gap-3">
      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${active ? 'text-neutral-900' : 'text-[#b98a55]'}`} />
      <span>{label}</span>
    </div>
    <div className="flex items-center gap-2">
      {count && (
        <span className={`px-2 py-0.5 rounded-full text-[10px] ${active ? 'bg-neutral-900/10 text-neutral-900' : 'bg-white/10 text-white'}`}>
          {count}
        </span>
      )}
      {hasDropdown && (
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''} ${active ? 'text-neutral-900' : 'text-neutral-400'}`} />
      )}
    </div>
  </div>
);

// Custom Dropdown Sub-item component
const DropdownItem = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
    active 
      ? 'bg-[#b98a55] text-neutral-900 border-[#b98a55]' 
      : 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-900 hover:text-white border-neutral-800/60'
  }`}>
    <Icon className={`w-4 h-4 ${active ? 'text-neutral-900' : 'text-[#b98a55]'}`} />
    <span>{label}</span>
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Mobile drawer open/close state
  const [isOpen, setIsOpen] = useState(false);

  const isPathInGroup = (paths) => paths.includes(currentPath);

  const [isShirtsOpen, setIsShirtsOpen] = useState(isPathInGroup(['/formal-shirts', '/informal-shirts', '/polo-shirts']));
  const [isPantsOpen, setIsPantsOpen] = useState(isPathInGroup(['/dress-pants', '/jeans-pants']));
  const [isShortsOpen, setIsShortsOpen] = useState(isPathInGroup(['/normal-shorts', '/three-four-shorts']));
  const [isJacketsOpen, setIsJacketsOpen] = useState(isPathInGroup(['/formal-jackets', '/denim-jackets']));

  const handleCategoryClick = (path) => {
    if (path) {
      navigate(path);
      setIsOpen(false); // Close mobile drawer on item click
    }
  };

  return (
    <>
      {/* Mobile Toggle Button (Aap ise header ya page mein jahan chahein use kar sakte hain ya floating button rakh sakte hain) */}
      <div className="lg:hidden p-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between sticky top-16 z-30">
        <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b98a55]">
          STITCHLAB Categories
        </span>
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-xl bg-neutral-900 text-white hover:bg-[#b98a55] hover:text-neutral-900 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
        >
          <Menu size={18} />
          Filters
        </button>
      </div>

      {/* Backdrop overlay for mobile drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:sticky top-0 lg:top-[100px] left-0 z-50
        w-72 sm:w-80 lg:w-64 
        h-full lg:h-[calc(100vh-100px)] 
        bg-neutral-950 p-4 sm:p-5 flex flex-col gap-3 font-sans 
        overflow-y-auto shrink-0 border-r border-neutral-800/80
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Header with Title and Close Button (Mobile Only) */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800 lg:border-none lg:mb-1">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#b98a55]">
              STITCHLAB Catalog
            </span>
            <h2 className="text-sm font-extrabold uppercase tracking-tight text-white mt-0.5 lg:hidden">
              Navigation
            </h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="lg:hidden p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close Sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Shirts Section */}
        <div className="flex flex-col gap-2">
          <div onClick={() => setIsShirtsOpen(!isShirtsOpen)}>
            <SidebarItem 
              icon={Shirt} 
              label="Shirts" 
              active={isPathInGroup(['/formal-shirts', '/informal-shirts', '/polo-shirts'])}
              hasDropdown={true}
              dropdownOpen={isShirtsOpen}
            />
          </div>
          {isShirtsOpen && (
            <div className="flex flex-col gap-1.5 ml-3 pl-3 border-l-2 border-neutral-800">
              <div onClick={() => handleCategoryClick('/formal-shirts')}>
                <DropdownItem icon={Briefcase} label="Formal Shirts" active={currentPath === '/formal-shirts'} />
              </div>
              <div onClick={() => handleCategoryClick('/informal-shirts')}>
                <DropdownItem icon={Shirt} label="Informal Shirts" active={currentPath === '/informal-shirts'} />
              </div>
              <div onClick={() => handleCategoryClick('/polo-shirts')}>
                <DropdownItem icon={Flame} label="Polo Shirts" active={currentPath === '/polo-shirts'} />
              </div>
            </div>
          )}
        </div>

        {/* Pants Section */}
        <div className="flex flex-col gap-2">
          <div onClick={() => setIsPantsOpen(!isPantsOpen)}>
            <SidebarItem 
              icon={Layers} 
              label="Pants" 
              active={isPathInGroup(['/dress-pants', '/jeans-pants'])}
              hasDropdown={true}
              dropdownOpen={isPantsOpen}
            />
          </div>
          {isPantsOpen && (
            <div className="flex flex-col gap-1.5 ml-3 pl-3 border-l-2 border-neutral-800">
               <div onClick={() => handleCategoryClick('/dress-pants')}>
                <DropdownItem icon={Briefcase} label="Dress Pants" active={currentPath === '/dress-pants'} />
              </div>
               <div onClick={() => handleCategoryClick('/jeans-pants')}>
                <DropdownItem icon={Scissors} label="Jeans Pants" active={currentPath === '/jeans-pants'} />
              </div>
            </div>
          )}
        </div>

        {/* Shorts Section */}
        <div className="flex flex-col gap-2">
          <div onClick={() => setIsShortsOpen(!isShortsOpen)}>
            <SidebarItem 
              icon={Sun} 
              label="Shorts" 
              active={isPathInGroup(['/normal-shorts', '/three-four-shorts'])}
              hasDropdown={true}
              dropdownOpen={isShortsOpen}
            />
          </div>
          {isShortsOpen && (
            <div className="flex flex-col gap-1.5 ml-3 pl-3 border-l-2 border-neutral-800">
               <div onClick={() => handleCategoryClick('/normal-shorts')}>
                <DropdownItem icon={Sun} label="Normal Shorts" active={currentPath === '/normal-shorts'} />
              </div>
               <div onClick={() => handleCategoryClick('/three-four-shorts')}>
                <DropdownItem icon={Sun} label="3/4 Shorts" active={currentPath === '/three-four-shorts'} />
              </div>
            </div>
          )}
        </div>

        {/* Jackets Section */}
        <div className="flex flex-col gap-2">
          <div onClick={() => setIsJacketsOpen(!isJacketsOpen)}>
            <SidebarItem 
              icon={CloudRain} 
              label="Jackets" 
              active={isPathInGroup(['/formal-jackets', '/denim-jackets'])}
              hasDropdown={true}
              dropdownOpen={isJacketsOpen}
            />
          </div>
          {isJacketsOpen && (
            <div className="flex flex-col gap-1.5 ml-3 pl-3 border-l-2 border-neutral-800">
               <div onClick={() => handleCategoryClick('/formal-jackets')}>
                <DropdownItem icon={Briefcase} label="Formal Jackets" active={currentPath === '/formal-jackets'} />
              </div>
               <div onClick={() => handleCategoryClick('/denim-jackets')}>
                <DropdownItem icon={Scissors} label="Denim Jackets" active={currentPath === '/denim-jackets'} />
              </div>
            </div>
          )}
        </div>

      </aside>
    </>
  );
};

export default Sidebar;