import { AlignJustify } from "lucide-react";

export default function TopNav({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between bg-white shadow px-4 h-16">
      {/* Left: Mobile menu button */}
      <div className="flex items-center lg:hidden">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          onClick={onMenuClick}
        >
          <AlignJustify className="size-5" />
        </button>
      </div>

      <div className="text-lg font-bold text-gray-800">Admin Portal</div>

      <div className="w-8 h-8 flex items-center justify-center rounded-full font-medium bg-gray-300">
        {/* <img
            src="/fawaz.jpg"
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          /> */}
        <span className="text-sm">AF</span>
      </div>
    </header>
  );
}
