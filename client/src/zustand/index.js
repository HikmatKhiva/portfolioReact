import { create } from "zustand";
import { saveAs } from "file-saver";
export const useZustandStore = create((set) => ({
  //  States
  mobileNav: false,
  selectedSkill: null,
  showResume: false,
  userInfo: null,
  themeColor: "",
  navLink: ["home", "skills", "certificate", "work", "contact"],
  // Functions
  toggleMobileNav: () => set((state) => ({ mobileNav: !state.mobileNav })),
  CloseMobileNav: () =>
    set((state) => ({ mobileNav: state.mobileNav == false })),
  handleSelect: (skill) => set(() => ({ selectedSkill: skill })),
  clearSelectSkill: () => set(() => ({ selectedSkill: null })),
  handleChangeTheme: (color) => set(() => ({ themeColor: color })),
  toggleShowResume: () => set((state) => ({ showResume: !state.showResume })),
  updateUserInfo: (user) => set(() => ({ userInfo: user })),
  downloadFile: (fileUrl, name) => {
    saveAs(fileUrl, name);
  },
}));
