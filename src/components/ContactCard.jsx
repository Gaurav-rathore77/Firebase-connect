import React from 'react'
import { FaUser } from "react-icons/fa"; // ✅ Ensure this import

import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";

function ContactCard({contact}) {
  return (
  
    <div
      key={contact.id}
      className="flex items-center gap-4 p-4 border-b border-gray-200 w-full max-w-md mx-auto"
    >
      {/* User Icon */}
      <FaUser className="text-3xl text-gray-500" />

      {/* Contact Details */}
      <div className="flex flex-col">
        <p className="font-semibold text-lg">{contact.name}</p>
        <p className="text-sm text-gray-500">{contact.email}</p>
      </div>
      < MdDelete className="text-3xl text-gray-500" />
      <MdEditDocument className="text-3xl text-gray-500" />

      {/* Delete Button */}
    </div>
  )
}

export default ContactCard