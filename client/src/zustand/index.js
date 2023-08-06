import { create } from "zustand";
import { saveAs } from "file-saver";
export const useZustandStore = create((set) => ({
  //  States
  selectedSkill: null,
  showResume: false,
  // Functions
  handleSelect: (skill) => set(() => ({ selectedSkill: skill })),
  clearSelectSkill: () => set(() => ({ selectedSkill: null })),
  toggleShowResume: () => set((state) => ({ showResume: !state.showResume })),
  downloadFile: (fileUrl, name) => {
    saveAs(fileUrl, name);
  },
}));
export const NavigationStates = create((set) => ({
  mobileNav: false,
  themeColor: "",
  // Functions
  toggleMobileNav: () => set((state) => ({ mobileNav: !state.mobileNav })),
  CloseMobileNav: () =>
    set((state) => ({ mobileNav: state.mobileNav == false })),
  // Theme
  handleChangeTheme: (color) => set(() => ({ themeColor: color })),
}));

/*save Client IP address */
export const useClientInfo = create((set) => ({
  alertUser: true,
  userInfo: null,
  updateUserInfo: (user) => set(() => ({ userInfo: user })),
  hideAlert: () => set(() => ({ alertUser: false })),
  showAlert: () => set(() => ({ alertUser: true })),
}));
