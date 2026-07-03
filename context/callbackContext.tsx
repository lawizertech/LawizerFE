"use client";

import { createContext, useContext, useState } from "react";

interface CallbackContextType {
 isOpen: boolean;
 serviceName: string;
 openCallback: (service: string) => void;
 closeCallback: () => void;
}

const CallbackContext = createContext<CallbackContextType | undefined>(undefined);

export function CallbackProvider({ children }: { children: React.ReactNode }) {
 const [isOpen, setIsOpen] = useState(false);
 const [serviceName, setServiceName] = useState("");

 const openCallback = (service: string) => {
 setServiceName(service);
 setIsOpen(true);
 };

 const closeCallback = () => {
 setIsOpen(false);
 };

 return (
 <CallbackContext.Provider value={{ isOpen, serviceName, openCallback, closeCallback }}>
 {children}
 </CallbackContext.Provider>
 );
}

export function useCallback() {
 const context = useContext(CallbackContext);
 if (context === undefined) {
 throw new Error("useCallback must be used within CallbackProvider");
 }
 return context;
}
