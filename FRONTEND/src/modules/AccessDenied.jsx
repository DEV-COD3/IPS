import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from "@nextui-org/react";

const AccessDenied = () => (
  <div className="flex items-center justify-center min-h-screen bg-red-300">
    <div className="bg-white shadow-md rounded-lg p-8 max-w-sm text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
      <p className="text-gray-700 mb-6">
       No tienes permiso para acceder a este modulo, comunicat con el administrador
      </p>           
      <div className="flex flex-wrap gap-4 items-center justify-center ">
        <Link to="/home">
          <Button className="text-white" color="warning" to= "/home">
            Regresar a el home
          </Button>  
         </Link>
       </div>
    </div>
  </div>
);

export default AccessDenied;

 