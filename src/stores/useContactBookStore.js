import { create } from "zustand";

const useContactBookStore = create((set) => ({
  contactBook: [],
  addContact: (name, phoneNumber, email, githubId) =>
    set((state) => ({
      contactBook: [
        ...state.contactBook,
        {id:Date.now(), name, phoneNumber, email, githubId },
      ],
   })),
   deleteContact: (id) => set((state)=> ({
      contactBook: state.contactBook.filter((item)=> item.id !==id),
   })),

}));

export default useContactBookStore;
