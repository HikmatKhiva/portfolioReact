import {create} from 'zustand'
export const useZustandStore = create((set) => ({
  //  States
  mobileNav: false,
  selectedSkill: null,
  showResume: false,
  userInfo: null,
  themeColor: '',
  // Functions
  toggleMobileNav: () => set((state) => ({mobileNav: !state.mobileNav})),
  CloseMobileNav: () => set((state) => ({mobileNav: state.mobileNav == false})),
  handleSelect: (skill) => set(() => ({selectedSkill: skill})),
  clearSelectSkill: () => set(() => ({selectedSkill: null})),
  handleChangeTheme: (color) => set(() => ({themeColor: color})),
  toggleShowResume: () => set((state) => ({showResume: !state.showResume})),
  updateUserInfo: (user) => set(() => ({userInfo: user})),
}))
