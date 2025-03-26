import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { useState , useEffect } from "react";

import {db} from "./config/firebase"
import { collection,  getDocs } from "firebase/firestore";
import Model from "./components/Model"
import NotFoundContact from "./components/NotFoundContact";
import ContactCard from "./components/ContactCard";
import useDisclouse from "./hooks/useDisclouse";
function App() {
  const [contacts , setContacts] = useState([])
  const { isOpen, onClose, onOpen } = useDisclouse();
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsResponse = collection(db , "contacts")
        const contactsSnapshot = await getDocs(contactsResponse)
        const contactsData = contactsSnapshot.docs.map(doc => {
           return {
            id : doc.id,
            ...doc.data()
           }
        })
        setContacts(contactsData)
        // setContacts(contactsData)
        // doc.data()
        console.log(contactsData)
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    fetchContacts();
  }, [])
  return (
    <div className="h-screen flex flex-col items-center px-4">
      {/* Navbar - Fixed at the Top */}
      <Navbar />

      {/* Search Bar Container */}
      <div className="relative mt-4 flex items-center w-full max-w-md">
        {/* Search Icon Inside Input */}
        <CiSearch className="absolute left-3 text-xl text-gray-500" />

        {/* Input Box */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />

        {/* Plus Icon Outside Input */}
        <button className="ml-3 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <CiSquarePlus className="text-xl  cursor-pointer" onClick={onOpen}/>
        </button>
      </div>
      <div className="m-4 flex flex-col gap-3">
      {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}

      </div>
      
      <Model/>
    </div>

  );
}

export default App;
